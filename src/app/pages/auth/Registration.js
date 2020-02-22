import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import { register } from "../../crud/auth.crud";
import { useState } from 'react';
import Swal from 'sweetalert2'

function Registration(props) {
  const { intl } = props;
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="AUTH.REGISTER.TITLE" />
          </h3>
        </div>

        <Formik
          initialValues={{
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            acceptTerms: true,
            confirmPassword: ""
          }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_FIELD"
              });
            }

            if (!values.firstName) {
              errors.firstName = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            }

            if (!values.lastName) {
              errors.lastName = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            }

            // if (!values.telephone) {
            //   errors.telephone = intl.formatMessage({
            //     id: "AUTH.VALIDATION.REQUIRED_FIELD"
            //   });
            // }

            if (!values.password) {
              errors.password = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and Confirm Password didn't match.";
            }

            if (!values.acceptTerms) {
              errors.acceptTerms = "Accept Terms";
            }

            return errors;
          }}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            register(
              values.email,
              values.firstName,
              values.lastName,
              values.password
            )
              .then((data) => {
                console.log(data)
                if(data.data.success){
                  // setSuccess(true)
                  // setMessage("Registration successful")
                  Swal.fire("Awesome!", "Registration successful. Check your email for further instructions", "success")
                }
                else{
                  // setSuccess(true)
                  // setMessage(data.message)
                  Swal.fire('Oops...', 'Something went wrong!', 'error')
                }
              })
              .catch((err, data) => {
                setSubmitting(false);
                // setStatus(
                //   intl.formatMessage({
                //     id: "AUTH.VALIDATION.INVALID_LOGIN"
                //   })
                // );
                Swal.fire('Oops...', 'Something went wrong!', 'error')
              });
          }}
        >
          {({
            values,
            status,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              {status && (
                <div role="alert" className="alert alert-danger">
                  <div className="alert-text">{status}</div>
                </div>
              )}

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="First Name"
                  className="kt-width-full"
                  name="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  helperText={touched.firstName && errors.firstName}
                  error={Boolean(touched.firstName && errors.firstName)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="Last Name"
                  className="kt-width-full"
                  name="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  helperText={touched.lastName && errors.lastName}
                  error={Boolean(touched.lastName && errors.lastName)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  label="Email"
                  margin="normal"
                  className="kt-width-full"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                />
              </div>

              


              <div className="form-group mb-0">
                <TextField
                  type="password"
                  margin="normal"
                  label="Password"
                  className="kt-width-full"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
              </div>

              <div className="form-group">
                <TextField
                  type="password"
                  margin="normal"
                  label="Confirm Password"
                  className="kt-width-full"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                />
              </div>

              {/* <div className="form-group mb-0">
                <TextField
                  type="number"
                  label="Telephone"
                  margin="normal"
                  className="kt-width-full"
                  name="telephone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.telephone}
                  helperText={touched.telephone && errors.telephone}
                  error={Boolean(touched.telephone && errors.telephone)}
                />
              </div> */}

              <div className="form-group mb-0">
                <FormControlLabel
                  label={
                    <>
                      I agree the{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms & Conditions
                      </Link>
                    </>
                  }
                  control={
                    <Checkbox
                      color="primary"
                      name="acceptTerms"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      checked={values.acceptTerms}
                    />
                  }
                />
              </div>

              <div className="kt-login__actions">
                <Link
                  to="/auth/forgot-password"
                  className="kt-link kt-login__link-forgot"
                >
                  <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
                </Link>

                <Link to="/auth">
                  <button type="button" className="btn btn-secondary btn-elevate kt-login__btn-secondary">
                    Back
                  </button>
                </Link>

                <button
                  disabled={isSubmitting || !values.acceptTerms}
                  className="btn btn-primary btn-elevate kt-login__btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default injectIntl(
  connect(
    null,
    auth.actions
  )(Registration)
);
