import React from "react";
import Form from "./components/form";
import "./App.scss";

const App = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
