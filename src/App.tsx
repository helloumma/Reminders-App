import React, { useState } from "react";
import Form from "./components/form";
import "./App.scss";

interface Values {
  time: string;
  date: any;
  reminder: string;
}

const App = () => {
  const [vals, setVals] = useState<Values>({
    time: "",
    date: "",
    reminder: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setVals((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ vals });
    await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ vals }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
          console.log(vals);
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setVals({
          time: "",
          date: "",
          reminder: "",
        });
      });
  };

  return (
    <div>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        val={vals}
      />
    </div>
  );
};

export default App;
