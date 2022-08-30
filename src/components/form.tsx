import { Formik, Form, Field, ErrorMessage } from "formik";

// disable the button until all fields have a value in them

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
      {({ values, errors, isValid, dirty }) => {
        return (
          <Form className="form" onSubmit={(e) => handleSubmit(e)}>
            <span>
              <label>Time</label>
              <Field
                id="time"
                type="time"
                onChange={handleChange}
                name="time"
                className={errors.time && "input-error"}
                value={values.val && values.val.time}
              />
            </span>
            <ErrorMessage name="time" component="span" className="error" />
            <span>
              <label>Date</label>
              <Field
                type="date"
                onChange={handleChange}
                name="date"
                className={errors.date && "input-error"}
                value={values.val && values.val.date}
              />
            </span>
            <ErrorMessage name="date" component="span" className="error" />
            <span>
              <label>Reminder</label>
              <Field
                type="text"
                onChange={handleChange}
                name="reminder"
                className={errors.reminder && "input-error"}
                value={values.val && values.val.reminder}
              />
            </span>
            <ErrorMessage name="reminder" component="span" className="error" />
            <button
              type="submit"
              className={
                !(dirty && isValid)
                  ? "disabled-btn submitButton"
                  : "submitButton"
              }
              disabled={!(dirty && isValid)}
            >
              SUBMIT
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormDetails;
