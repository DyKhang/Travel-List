import { useState } from "react";

export default function Form({ setItems }) {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");

  function handleAddItem(newItem) {
    setItems((items) => (items = [...items, newItem]));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      description: desc,
      quantity,
      packed: false,
      id: Date.now(),
    };
    handleAddItem(newItem);
    setDesc("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity((quantity) => (quantity = e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={(e) => setDesc((desc) => (desc = e.target.value))}
      />
      <button>Add</button>
    </form>
  );
}
