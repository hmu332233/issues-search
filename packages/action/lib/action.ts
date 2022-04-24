import { Octokit } from '@octokit/core';
import algoliasearch from 'algoliasearch';

type SearchItem = {
  id: number;
  title: string;
  contents: string;
  keyword: string;
  url: string;
};

const OWNER = 'hmu332233';
const REPO = 'tips';

async function getSearchItems() {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const { data: issues } = await octokit.request(
    'GET /repos/{owner}/{repo}/issues',
    {
      owner: OWNER,
      repo: REPO,
      per_page: 100,
    },
  );

  const searchItems = await Promise.all<Promise<SearchItem>[]>(
    issues.map(async (issue) => {
      const { data: comments } = await octokit.request(
        'GET /repos/{owner}/{repo}/issues/{issue_number}/comments',
        {
          owner: OWNER,
          repo: REPO,
          issue_number: issue.number,
        },
      );

      const contents = comments.reduce(
        (commentsBody, comment) => `${commentsBody}\n\n${comment.body}`,
        '',
      );

      return {
        id: issue.number,
        title: issue.title,
        contents,
        keyword: issue.body,
        url: issue.html_url,
      };
    }),
  );

  return searchItems;
}

const client = algoliasearch(process.env.ALGOLIA_ID, process.env.ALGOLIA_KEY);
const index = client.initIndex(process.env.ALGOLIA_INDEX);

async function action() {
  try {
    const searchItems = await getSearchItems();
    await index.clearObjects();
    await index.saveObjects(searchItems, {
      autoGenerateObjectIDIfNotExist: true,
    });
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await action();
})();
