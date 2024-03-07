import React from 'react';

export default function App5() {
  let names = ["sisi", "stoessel", "stan"];
  return (
    <ul>
      {names.map((e, i) => {
        return <li key={i}>{e}</li>;
      })}
    </ul>
  );
}
