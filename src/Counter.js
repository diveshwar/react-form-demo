import React, { useState } from "react";
import Display from "./Display";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Counter App (State & Props)</h2>
      <Display count={count} />
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setCount((c) => c + 1)} style={{ marginRight: 6 }}>
          Increment
        </button>
        <button onClick={() => setCount((c) => c - 1)} style={{ marginRight: 6 }}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </section>
  );
}
