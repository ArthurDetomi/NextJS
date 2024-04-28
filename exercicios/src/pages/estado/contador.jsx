import { useState } from "react";
import NumeroDisplay from "../../../components/NumeroDisplay";

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
      <NumeroDisplay numero={value} />
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
