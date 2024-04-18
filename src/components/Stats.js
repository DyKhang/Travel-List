export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list😒</em>
      </footer>
    );
  }

  const totalItems = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((itemsPacked / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? `You got everything! Ready to go ✈️`
          : `👜 You have ${totalItems} items on your list, and you already packed
          ${itemsPacked} (${percent}%)`}
      </em>
    </footer>
  );
}

// Start adding some items to your packing list

//You got everything! Ready to go ✈️

// 👜 You have ${numItems} items on your list, and you already packed
// ${numItemsPacked} (${numItemsPackedPercent}%)
