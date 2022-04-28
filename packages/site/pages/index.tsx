import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import algoliasearch from 'algoliasearch/lite';

import classNames from 'classnames';

import MarkdownView from 'components/MarkdownView';
import { normalizeData } from 'utils';

import dummyData from 'utils/dummy';
import PreviewMenu from 'components/PreviewMenu';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_KEY as string,
);
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string);

const Home: NextPage = () => {
  const [keyword, setKeyword] = useState('');
  const [items, setItems] = useState<NormalizedData<SearchItem>>({
    ids: [],
    entities: {},
  });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { query } = Object.fromEntries(formData);
    setKeyword(query as string);
  };

  useEffect(() => {
    index.search(keyword).then(({ hits }) => {
      setItems(normalizeData(hits, 'id'));
    });
  }, [keyword]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="modal modal-open p-10">
        <div className="modal-box flex flex-col w-full max-w-5xl h-full max-h-832">
          <form className="w-full" onSubmit={handleSearch}>
            <input
              name="query"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </form>
          <div className="flex-grow w-full mt-4 overflow-hidden">
            <PreviewMenu items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
