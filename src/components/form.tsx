interface Props {
  handleChange: Function;
  handleSubmit: Function;
  val: any;
}

const Form = ({ handleChange, handleSubmit, val }: Props) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <label>time</label>
      <input
        className=""
        id=""
        type="text"
        onChange={(e) => handleChange(e)}
        name="time"
        value={val.time}
      />
      <label>date</label>
      <input
        className=""
        id=""
        type="text"
        onChange={(e) => handleChange(e)}
        name="date"
        value={val.date}
      />
      <label>reminder</label>
      <input
        className=""
        id=""
        type="text"
        onChange={(e) => handleChange(e)}
        name="reminder"
        value={val.reminder}
      />
      <button className="submitButton" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
