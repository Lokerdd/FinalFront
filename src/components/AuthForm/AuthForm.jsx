import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { schema, fieldTypes } from './constants';

import './AuthForm.css';

function AuthForm({ formType }) {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      validationSchema={schema(formType)}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="auth-form"
        >
          {fieldTypes.map(({ name, type }) => (!(formType === 'Log In' && name === 'name')
            ? (
              <div key={name}>
                <span>{`${name.charAt(0).toUpperCase() + name.slice(1)}:`}</span>
                <Field
                  id={name}
                  name={name}
                  type={type}
                />
                {errors[name] && touched[name] ? (
                  <div className="error">{errors[name]}</div>
                ) : null}
              </div>
            )
            : null
          ))}

          <button type="submit">{formType}</button>
        </Form>
      )}
    </Formik>
  );
}
AuthForm.propTypes = {
  formType: PropTypes.string.isRequired,
};

export default memo(AuthForm);
