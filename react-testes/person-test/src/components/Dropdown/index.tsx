import React, { useState } from "react";

interface DropdownProps {
  title: string;
  options: Array<string>;
  onSelect: (option: string) => void;
}

export const Dropdown = ({ title, options, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelection = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="c-dropdown">
      <button onClick={() => setIsOpen(true)} name={title}>
        {title}
      </button>

      {isOpen && (
        <ul role="menu" className="c-dropdown__list">
          {options.map((option, index) => (
            <li
              role="menuitem"
              key={index}
              onClick={() => handleSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
