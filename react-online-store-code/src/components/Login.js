// Import necessary React components and libraries for the login form.
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for form validation schema creation.
import LoginError from "./LoginError";
import { Button } from "react-bootstrap";

const Login = () => {
  // Function component named Login.
  // Initial form field values
  const initialValues = {
    email: "",
    password: "",
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address") // To validate email format
      .required("Email is required"), // To ensure email is not empty
    password: Yup.string()
      .min(8, "Password must be at least 8 characters") // To enforce minimum password length
      .required("Password is required"), // To ensure password is not empty
  });

  // Function to handle form submission
  const onSubmit = (values) => {
    // To handle login logic here
    console.log("Login data:", values);
  };

  return (
    <div>
      <h1 className="ms-3" style={{ color: "white" }}>
        Login
      </h1>
      <div className="text-center">
        {/* Formik wrapper for form handling */}
        <Formik
          initialValues={initialValues} //To set the initial form field values
          validationSchema={validationSchema} // To define the validation schema for form fields
          onSubmit={onSubmit} // To define the submission handler for the form
        >
          <Form>
            <div>
              {/* Email Field */}
              <div className="email-label" style={{ marginRight: "9.2rem" }}>
                <label>Email:</label>
              </div>

              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component={LoginError} />
            </div>
            <div style={{ marginTop: "10px" }}>
              {/* Password Field */}
              <div className="email-label" style={{ marginRight: "7.4rem" }}>
                <label>Password:</label>
              </div>

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component={LoginError} />
            </div>
            {/* Submit Button */}
            <Button type="submit" style={{ marginTop: "10px" }}>
              Login
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
