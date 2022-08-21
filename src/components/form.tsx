interface Props {
  handleChange: Function;
  handleSubmit: Function;
  val: any;
}

const Form = ({ handleChange, handleSubmit, val }: Props) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="form">
      <span>
        <label>Time</label>
        <input
          className=""
          id=""
          type="text"
          onChange={(e) => handleChange(e)}
          name="time"
          value={val.time}
        />
      </span>
      <span>
        <label>Date</label>
        <input
          className=""
          id=""
          type="text"
          onChange={(e) => handleChange(e)}
          name="date"
          value={val.date}
        />
      </span>
      <span>
        <label>Reminder</label>
        <input
          className=""
          id=""
          type="text"
          onChange={(e) => handleChange(e)}
          name="reminder"
          value={val.reminder}
        />
      </span>
      <button className="submitButton" type="submit">
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
