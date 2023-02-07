/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './AuthForm.css';

const EMAIL = 'email';
const NAME = 'name';
const PASSWORD = 'password';

const schema = (formType) => {
  const shape = {
    password: Yup.string()
      .trim()
      .min(8, 'At least 8 characters without spaces!')
      .required('Required'),
    email: Yup.string()
      .matches(
        /^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u,
        'Please enter a valid email without russian letters',
      )
      .required('Required'),
  };
  if (formType === 'Sign Up') {
    shape.name = Yup.string()
      .trim()
      .min(4, 'At least 4 characters without spaces!')
      .required('Required');
  }
  return Yup.object().shape(shape);
};

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
      {({ errors, touched, handleSubmit }) => (
        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor={EMAIL}>Email:</label>
            <Field
              id={EMAIL}
              name={EMAIL}
              type="text"
            />
            {errors.email && touched.email ? (
              <div className="error">{errors.email}</div>
            ) : null}
          </div>

          {formType === 'Sign Up'
            && (
              <div>
                <label htmlFor={NAME}>Name:</label>
                <Field
                  id={NAME}
                  name={NAME}
                  type="text"
                />
                {errors.name && touched.name
                  ? <div className="error">{errors.name}</div>
                  : null}
              </div>
            )}

          <div>
            <label htmlFor={PASSWORD}>Password:</label>
            <Field
              id={PASSWORD}
              name={PASSWORD}
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : null}
          </div>

          <button type="submit">{formType}</button>
        </form>
      )}
    </Formik>
  );
}
AuthForm.propTypes = {
  formType: PropTypes.string.isRequired,
};
// const formik = useFormik({
//   initialValues: {
//     email: '',
//     name: '',
//     password: '',
//   },
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//   },
//   validationSchema: { SignupSchema },
// });

// return (
//   <form className="auth-form" onSubmit={formik.handleSubmit}>
//     <label htmlFor={EMAIL}>Your email:</label>
//     <input
//       id={EMAIL}
//       name={EMAIL}
//       type="text"
//       placeholder="Email"
//       onChange={formik.handleChange}
//       value={formik.values.email}
//     />

//     {formType === 'Sign Up'
//       && <label htmlFor={NAME}>Your name:</label>}
//     {formType === 'Sign Up'
//       && (
//         <input
//           id={NAME}
//           name={NAME}
//           type="text"
//           placeholder="Name"
//           onChange={formik.handleChange}
//           value={formik.values.name}
//         />
//       )}

//     <label htmlFor={PASSWORD}>Your password:</label>
//     <input
//       id={PASSWORD}
//       name={PASSWORD}
//       type={PASSWORD}
//       placeholder="Password"
//       onChange={formik.handleChange}
//       value={formik.values.password}
//     />

//     <button type="submit">{formType}</button>
//   </form>
// );

export default memo(AuthForm);
