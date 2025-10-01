import React, { useState } from "react";

/*
  Event demo:
  - onClick (with and without args)
  - onChange (form control)
  - onKeyDown (simple example)
*/

export default function EventDemo() {
  const [text, setText] = useState("");

  const handleClickNoArg = () => {
    alert("Button clicked (no arg)!");
  };

  const handleClickWithArg = (id) => {
    alert(`Button clicked with id = ${id}`);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert("You pressed Enter!");
    }
  };

  return (
    <section>
      <h2>Events Demo</h2>

      <div style={{ marginBottom: 12 }}>
        <button onClick={handleClickNoArg}>Click me (no arg)</button>
        <button onClick={() => handleClickWithArg(101)} style={{ marginLeft: 8 }}>
          Click me (with arg)
        </button>
      </div>

      <div>
        <label>Type something:</label>
        <input
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Try typing and press Enter"
          style={{ width: "100%", padding: 8, marginTop: 6 }}
        />
        <p>You typed: {text}</p>
      </div>
    </section>
  );
}

