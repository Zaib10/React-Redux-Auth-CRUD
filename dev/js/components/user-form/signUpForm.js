import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Field, reduxForm, values } from 'redux-form'
import submit from '../../container/user-form/signUpForm';
import { LogIn } from '../../actons/userActions';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.firstName)) {
    errors.firstName = 'Invalid First Name'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.lastName)) {
    errors.lastName = 'Invalid Last Name'
  }
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
      <input {...input} className="form-control" placeholder={label} type={type} />
      {touched && error && <span className="error-color">{error}</span>}
    </div>
  </div>
)

const SignUpForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props
  console.log("edded", error)
  return (

    <div className="container  ">
      <div className="card bg-faded card-block ">
        <h2>SignUp</h2>
      </div>

      <div className="card bg-faded card-block">


        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <Field
                name="firstName"
                type="text"
                component={renderField}
                label="First Name"
              />
            </div>  
              <div className="col">
              <Field
                name="lastName"
                type="text"
                component={renderField}
                label="Last Name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name="email"
                type="text"
                component={renderField}
                label="Email"
              />
            </div>  
              {error && <strong>{error}</strong>}
              <div className="col">
              <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="col-md-2">
                <br /><button className="btn btn-success" type="submit" disabled={submitting}>SinUp </button>
              </div>
              <div className="col-md-2">
                <br /><button className="btn btn-danger" type="button" disabled={pristine || submitting} onClick={reset}> Clear Values </button>
                <Link to="/login">Back</Link>
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
})(SignUpForm)