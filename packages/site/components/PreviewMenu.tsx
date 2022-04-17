import React, { useState } from 'react';


import classNames from 'classnames';
import MarkdownView from 'components/MarkdownView';

type Props = {
  items: NormalizedData<SearchItem>;
};

function PreviewMenu({ items }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeId = items.ids[activeIndex];

  if (!activeId) {
    return null;
  }

  return (
    <div className="flex flex-row h-full">
      <ul className="menu flex-auto w-2/4 overflow-auto">
        {items.ids.map((id, index) => (
          <li
            key={id}
            className={classNames(id === activeId && 'bordered')}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <a>{items.entities[id].title}</a>
          </li>
        ))}
      </ul>
      <div className="flex-auto w-2/4 px-4 overflow-auto">
        <MarkdownView contents={items.entities[activeId].contents} />
      </div>
    </div>
  );
}

export default PreviewMenu;