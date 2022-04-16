import { useEffect, useState } from "react";
import type { NextPage } from "next";
import algoliasearch from "algoliasearch/lite";

import classNames from "classnames";

import MarkdownView from "components/MarkdownView";
import { normalizeData } from "utils";

import dummyData from 'utils/dummy';

const client = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_ID as string,
  process.env.NEXT_PUBLIC_ALGOLIA_KEY as string
);
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX as string);

const Home: NextPage = () => {
  const [items, setItems] = useState<NormalizedData<SearchItem>>({ ids: [], entities: {} });
  const [activeId, setActiveId] = useState('0');
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { query } = Object.fromEntries(formData);

    index.search(query as string).then(({ hits }) => {
      // console.log(hits);
      setItems(normalizeData(hits, 'id'));
    });
  };

  // const items = normalizeData(dummyData, 'id');

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="modal modal-open py-10">
        <div className="modal-box w-full max-w-4xl h-full max-h-832">
          <form className="w-full" onSubmit={handleSearch}>
            <input
              name="query"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </form>
          <div className="flex flex-row w-full">
            <ul className="menu flex-auto w-2/4">
              {items.ids.map((id) => (
                <li
                  className={classNames(id === activeId && 'bordered')}
                  key={id}
                  onMouseEnter={() => setActiveId(id)}
                >
                  <a>{items.entities[id].title}</a>
                </li>
              ))}
            </ul>
            <div className="flex-auto w-2/4">
              <MarkdownView contents={items.entities[activeId]?.contents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
