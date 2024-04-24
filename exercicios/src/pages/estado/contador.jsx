import { useState } from "react";

export default function contador() {
  const [value, setValue] = useState(0);

  function increaseOrDecreaseValue(increase) {
    if (increase) {
      setValue(value + 1);
    } else {
      setValue(value - 1);
    }
  }

  return (
    <div>
      <h1>Contador</h1>
      <div>
        <h2>Valor: {value}</h2>
      </div>
      <button
        style={{ width: "100px" }}
        onClick={() => increaseOrDecreaseValue(false)}
      >
        -
      </button>
      <button
        style={{ width: "100px" }}
        onClick={() => increaseOrDecreaseValue(true)}
      >
        +
      </button>
    </div>
  );
}
