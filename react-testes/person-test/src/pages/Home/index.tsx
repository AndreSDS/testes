import React, { useState } from "react";
import { Dropdown } from "../../components/Dropdown";

export const Home = () => {
  const [selected, setSelected] = useState("");

  const onSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="App">
      {selected && (
        <div role="presentation">O pokemmon selecionado foi {selected}.</div>
      )}

      <Dropdown
        title="Selecione seu pokemon inicial"
        options={["Bulbasaur", "Chamander", "Squitle"]}
        onSelect={onSelect}
      />
    </div>
  );
};
