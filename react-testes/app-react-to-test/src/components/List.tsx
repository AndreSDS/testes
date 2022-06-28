import { useState } from "react";

interface ListProps {
  initialItems: string[];
}

export const List = ({ initialItems }: ListProps) => {
  const [list, setList] = useState(initialItems);
  const [newItem, setNewItem] = useState("");

  function addToList() {
    setList((state) => [...state, newItem]);
  }

  function removeFromList(item: string) {
    setList((state) => state.filter((i) => i !== item));
  }

  return (
    <>
      <input
        placeholder="Novo item"
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addToList}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
};
