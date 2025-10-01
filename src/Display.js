import React from "react";

export default function Display({ count }) {
  return (
    <div style={{ padding: 8, background: "#eef", display: "inline-block", borderRadius: 6 }}>
      <strong>Count:</strong> {count}
    </div>
  );
}
