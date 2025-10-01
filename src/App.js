import React from "react";
import "./index.css";
import RegistrationForm from "./RegistrationForm";
import EventDemo from "./EventDemo";
import ButtonDemo from "./ButtonDemo";
import Counter from "./Counter";

/*
  Assignment: React Forms, Events & Core Concepts
  Name: [Your Name]        <-- replace with your name
  Reg No: [Your Reg No]   <-- replace with reg no
*/

function App() {
  return (
    <div className="App">
      <h1>React Assignment Demo</h1>

      <RegistrationForm />

      <hr />

      <EventDemo />

      <hr />

      <h2>Reusable Button (state inside)</h2>
      <ButtonDemo text="Say Hi" color="#007bff" />
      <ButtonDemo text="Cancel" />

      <hr />

      <Counter />
    </div>
  );
}

export default App;
