import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LoginError from "./LoginError";
import { Button } from "react-bootstrap";

const Registration = () => {
  // Initial form field values
  const initialValues = {
    firstName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // To define the validation schema using Yup
  const validationSchema = Yup.object().shape({
    // Validation for the First Name field
    firstName: Yup.string()
      .max(15, "First Name must not exceed 15 characters")
      .required("First Name is required"),
    // Validation for the Surname field
    surname: Yup.string()
      .max(20, "Surname must not exceed 20 characters")
      .required("Surname is required"),
    // Validation for the Email field
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "The password must contain 8 characters or more, at least one uppercase and lowercase letter, a number, and a special case character"
      )
      .required("Password is required"),
    // Validation for the Confirm Password field
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // To define the form submission logic
  const onSubmit = (values) => {
    // To handle registration logic here
    console.log("Registration data:", values);
  };

  return (
    <div>
      {/* Registration page heading */}
      <h1 className="ms-3" style={{ color: "white" }}>
        Registration
      </h1>
      <div className="text-center">
        {/* Formik component for handling form state */}
        <Formik
          initialValues={initialValues} //To set the initial form field values
          validationSchema={validationSchema} // To define the validation schema for form fields
          onSubmit={onSubmit} // To define the submission handler for the form
        >
          <Form>
            <div>
              <div>
                {/* Label for the First Name input field */}
                <label style={{ marginRight: "6.8rem" }}>First Name:</label>
              </div>

              {/* Input field for First Name */}
              <Field
                type="text"
                name="firstName"
                placeholder="Enter first name"
              />
              {/* To display error message for First Name, if any */}
              <ErrorMessage name="firstName" component={LoginError} />
            </div>
            <div>
              <div className="mt-2">
                {/* Label for the Surname input field */}
                <label style={{ marginRight: "7.6rem" }}>Surname:</label>
              </div>

              {/* Input field for Surname */}
              <Field type="text" name="surname" placeholder="Enter surname" />
              {/* To display error message for Surname, if any */}
              <ErrorMessage name="surname" component={LoginError} />
            </div>
            <div className="mt-2">
              <div>
                {/* Label for the Email input field */}
                <label style={{ marginRight: "9.2rem" }}>Email:</label>
              </div>

              {/* Input field for Email */}
              <Field type="email" name="email" placeholder="Enter email" />
              {/* To display error message for Email, if any */}
              <ErrorMessage name="email" component={LoginError} />
            </div>
            <div className="mt-2">
              <div>
                {/* Label for the Password input field */}
                <label style={{ marginRight: "7.4rem" }}>Password:</label>
              </div>

              {/* Input field for Password */}
              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
              {/* Display error message for Password, if any */}
              <ErrorMessage name="password" component={LoginError} />
            </div>
            <div className="mt-2">
              <div>
                {/* Label for the Confirm Password input field */}
                <label style={{ marginRight: "3.7rem" }}>
                  Confirm Password:
                </label>
              </div>

              {/* Input field for Confirm Password */}
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              {/* To display error message for Confirm Password, if any */}
              <ErrorMessage name="confirmPassword" component={LoginError} />
            </div>
            {/* Submit button for the registration form */}
            <Button type="submit" style={{ marginTop: "10px" }}>
              Register
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
