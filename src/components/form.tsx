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

// this needs to be the interface used in App.tsx
const initalValues = {
  time: "",
  date: "",
  reminder: "",
};

const FormOutline = ({ handleChange, handleSubmit, val }: Props) => {
  return (
    <Formik
      initialValues={val}
      validationSchema={valSchema}
      onSubmit={(e) => handleSubmit(e)}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <form className="form">
            <span>
              <label htmlFor="time">Time</label>
              <Field
                helperText={
                  errors.time && touched.time ? errors.time : "Enter time"
                }
                error={errors.time && touched.time ? true : false}
                id=""
                type="time"
                onChange={(e: string) => handleChange(e)}
                name="time"
                value={val.time}
              />
            </span>
            <ErrorMessage name="time" component="span" className="error" />
            <span>
              <label htmlFor="date">Date</label>
              <Field
                className={errors.date && touched.date ? "input-error" : null}
                id=""
                type="text"
                onChange={(e: string) => handleChange(e)}
                name="date"
                value={val.date}
              />
            </span>
            <ErrorMessage name="date" component="span" className="error" />
            <span>
              <label htmlFor="reminder">Reminder</label>
              <Field
                className={
                  errors.reminder && touched.reminder ? "input-error" : null
                }
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
