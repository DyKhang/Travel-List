export default function Item({ description, quantity, packed, setItems, id }) {
  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function togglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <li>
      <input type="checkbox" onChange={() => togglePacked(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
}
