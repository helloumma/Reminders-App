import { Formik, Form, FormikProps, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  handleChange: Function;
  handleSubmit: Function;
  val: any;
}

const valSchema = Yup.object().shape({
  time: Yup.string().required("Time is required"),
  date: Yup.string().required("Date is required"),
  reminder: Yup.string().required("Reminder is required"),
});

const initalValues = {
  time: "",
  date: "",
  email: "",
};

const FormOutline = ({ handleChange, handleSubmit, val }: Props) => {
  return (
    <Formik
      initialValues={initalValues}
      validationSchema={valSchema}
      onSubmit={(e) => handleSubmit(e)}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <span>
              <label>Time</label>
              <Field
                className=""
                id=""
                type="time"
                onChange={(e: string) => handleChange(e)}
                name="time"
                value={val.time}
              />
            </span>
            <ErrorMessage name="time" component="span" className="error" />
            <span>
              <label>Date</label>
              <Field
                className=""
                id=""
                type="text"
                onChange={(e: string) => handleChange(e)}
                name="date"
                value={val.date}
              />
            </span>
            <ErrorMessage name="date" component="span" className="error" />
            <span>
              <label>Reminder</label>
              <Field
                className=""
                id=""
                type="text"
                onChange={(e: string) => handleChange(e)}
                name="reminder"
                value={val.reminder}
              />
            </span>
            <ErrorMessage name="reminder" component="span" className="error" />
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default FormOutline;
