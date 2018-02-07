import React from 'react'
import { Field, reduxForm, values } from 'redux-form'
import submit from '../../container/user-form/submitUser';
import { LogIn } from '../../actons/userActions';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const validate = values => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}
//onsole.log("errr", validate)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <br /> <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      <br />{touched && error && <span className="error-color">{error}</span>}
    </div>
  </div>
)

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  console.log("edded", error)
  return (
    <div className="container">
      <div className=" card bg-faded card-block width margin">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-12">
                <Field
                  className="form-control input-sm chat-input"
                  name="email"
                  type="text"
                  component={renderField}
                  label="Email"
                />

                <Field
                  className="form-control input-sm chat-input"
                  name="password"
                  type="password"
                  component={renderField}
                  label="Password"
                />
              </div>
              {error && <strong>{error}</strong>}
            </div>

            <div className="col-md-12">
              <div className="col-md-4">
                <br /><button className="btn btn-success" type="submit" disabled={submitting}>
                  Log In
                </button>
              </div>
              <div className="col-md-6">
                <br /><Link to="/signup"> Sign Up</Link>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}
export default reduxForm({
  form: 'submitValidation',
  validate, // a unique identifier for this form
})(SubmitValidationForm)