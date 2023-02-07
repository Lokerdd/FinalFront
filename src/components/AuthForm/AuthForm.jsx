/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import { useFormik } from 'formik';

import './AuthForm.css';

const EMAIL = 'email';
const NAME = 'name';
const PASSWORD = 'password';

function AuthForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="auth-form" onSubmit={formik.handleSubmit}>
      <label htmlFor={EMAIL}>Your email:</label>
      <input
        id={EMAIL}
        name={EMAIL}
        type={EMAIL}
        placeholder="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor={NAME}>Your name:</label>
      <input
        id={NAME}
        name={NAME}
        type="text"
        placeholder="Name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor={PASSWORD}>Your password:</label>
      <input
        id={PASSWORD}
        name={PASSWORD}
        type={PASSWORD}
        placeholder="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default memo(AuthForm);
