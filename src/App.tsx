import React, { useState } from "react";
import Form from "./components/form";
import "./App.scss";

interface Values {
  time: string;
  date: any;
  reminder: string;
}

const App = () => {
  const [values, setValues] = useState<Values>({
    time: "",
    date: "",
    reminder: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    console.log({ values });
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ values }),
    })
      .then((res) => res.json())
      .then(() => {
        setValues({
          time: "",
          date: "",
          reminder: "",
        });
      });
  };

  return (
    <div>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  );
};

export default App;
