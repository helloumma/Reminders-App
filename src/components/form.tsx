import { useState } from "react";
import Calendar from "./calendar";

interface Props {
  handleChange: Function;
  handleSubmit: Function;
}

const Form = ({ handleChange, handleSubmit }: Props) => {
  const [date, setDate] = useState<Date>();
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>time</label>
      <input
        className=""
        id=""
        type="text"
        onChange={(e) => handleChange(e)}
        name="time"
      />
      <label>date</label>
      <Calendar date={date} setDate={setDate} />
      <label>reminder</label>
      <input
        className=""
        id=""
        type="text"
        onChange={(e) => handleChange(e)}
        name="reminder"
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
