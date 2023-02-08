import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import { schema, fieldTypes } from './constants';
import { authRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert/CustomAlert';

import './AuthForm.css';

function AuthForm({ formType }) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  let errorMessages = [];
  if (error) {
    fieldTypes.forEach(({ name }) => {
      if (error[name]) errorMessages = errorMessages.concat(error[name]);
    });
  }

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      validationSchema={schema(formType)}
      onSubmit={(values) => {
        dispatch(authRequest(values));
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

          {error && errorMessages.map((item) => <CustomAlert key={item} message={item} severity="error" />)}

          <LoadingButton
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="outlined"
          >
            {formType}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}
AuthForm.propTypes = {
  formType: PropTypes.string.isRequired,
};

export default memo(AuthForm);
