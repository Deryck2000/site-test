// components/ItemList.js
import { useState } from 'react';

const ItemList = ({ items }) => {
  const [showAll, setShowAll] = useState(false);

  // 表示するアイテムの数を決定
  const displayedItems = showAll ? items : items.slice(0, 7);

  return (
    <div>
      <ul>
        {displayedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {items.length > 7 && (
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? '表示を減らす' : 'すべて表示'}
        </button>
      )}
    </div>
  );
};

export default ItemList;
