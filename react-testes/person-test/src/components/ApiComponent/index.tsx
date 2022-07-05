import React, { useEffect, useState } from "react";

export const ApiComponent = () => {
  const [data, setData] = useState<{
    name: string;
  }>();

  useEffect(() => {
    let insMounted = true;

    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        if (insMounted) {
          setData(data);
        }
      });

    return () => {
      insMounted = false;
    };
  }, []);

  return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
};
