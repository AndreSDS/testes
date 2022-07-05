import React from "react";

interface PersonProps {
  name: string;
}

export const Person = ({ name }: PersonProps) => {
  return <div role="content">Name is {name}</div>;
};
