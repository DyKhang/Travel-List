import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [filter, setFilter] = useState("input");
  let itemsfilter = [];
  function handleClearList() {
    setItems((items) => (items = []));
  }

  if (filter === "input") {
    itemsfilter = items;
  }

  if (filter === "description") {
    itemsfilter = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (filter === "packed") {
    itemsfilter = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="list">
      <ul>
        {itemsfilter.map((item) => (
          <Item
            key={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed}
            setItems={setItems}
            id={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={filter}
          onChange={(e) => setFilter((filter) => (filter = e.target.value))}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
