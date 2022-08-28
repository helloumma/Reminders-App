import React, { useState } from "react";
import Form from "./components/form";
import "./App.scss";
import * as Yup from "yup";

interface Values {
  time: string;
  date: string;
  reminder: string;
}

// ensure reminder is not empty
const valSchema: Yup.SchemaOf<Values> = Yup.object().shape({
  time: Yup.string().required("required"),
  date: Yup.string().required("required"),
  reminder: Yup.string().required("required"),
});

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
    // e.preventDefault();
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
          console.log("vals", vals);
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
    <div className="page">
      <h1 className="title">REMINDER</h1>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        val={vals}
        valSchema={valSchema}
      />
    </div>
  );
};

export default App;
