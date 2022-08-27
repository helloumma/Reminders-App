import { Formik, Form, Field, ErrorMessage } from "formik";

interface Props {
  handleChange: Function;
  handleSubmit: Function;
  val: any;
  valSchema: object;
}

const FormDetails = ({ handleChange, handleSubmit, val, valSchema }: Props) => {
  return (
    <Formik
      initialValues={val}
      onSubmit={(e) => handleSubmit(e)}
      validationSchema={valSchema}
    >
      {({ values }) => {
        return (
          <Form className="form" onSubmit={(e) => handleSubmit(e)}>
            <span>
              <label>Time</label>
              <Field
                id="time"
                type="text"
                onChange={(e: string) => handleChange(e)}
                name="time"
                value={val.time}
              />
            </span>
            <ErrorMessage name="time" component="span" className="error" />
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
              <Field
                type="text"
                onChange={handleChange}
                name="reminder"
                value={values.val && values.val.reminder}
              />
            </span>
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormDetails;
