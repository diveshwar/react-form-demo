import React, { useState } from "react";

export default function ButtonDemo({ text = "Click", color }) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount((c) => c + 1)}
      style={{
        padding: "8px 14px",
        margin: 6,
        backgroundColor: color || "#61dafb",
        color: "#fff",
        border: "none",
        borderRadius: 6,
        cursor: "pointer"
      }}
    >
      {text} — Clicked {count}
    </button>
  );
}
