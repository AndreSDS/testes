import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Dropdown } from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState("");

  const onSelect = (option: string) => {
    setSelected(option);
  };

  return (
    <div className="App">
      {selected && <div>O pokemmon selecionado foi {selected}.</div>}

      <Dropdown
        title="Selecione seu pokemon inicial"
        options={["Bulbasaur", "Chamander", "Squitle"]}
        onSelect={onSelect}
      />
    </div>
  );
}

export default App;
