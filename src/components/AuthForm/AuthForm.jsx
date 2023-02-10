import React, { memo } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import { schema, logInFields, signUpFields } from './constants';
import { authRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert/CustomAlert';
import { LOG_IN } from '../Header/constants';

import './AuthForm.css';

function AuthForm() {
  const { isLoading, error } = useSelector((state) => state.auth);
  const { modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const fieldTypes = modalType === LOG_IN
    ? logInFields
    : signUpFields;

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
      validationSchema={schema(modalType)}
      onSubmit={(values) => {
        dispatch(authRequest(values));
      }}
    >
      {({ errors, touched }) => (
        <Form
          className="auth-form"
        >
          {fieldTypes.map(({ name, type }) => (
            <div key={name}>
              <span>{`${name.charAt(0).toUpperCase()}${name.slice(1)}:`}</span>
              <Field
                id={name}
                name={name}
                type={type}
              />
              {errors[name] && touched[name] && (
                <div className="error">{errors[name]}</div>
              )}
            </div>
          ))}

          {error && errorMessages.map((item) => <CustomAlert key={item} message={item} severity="error" />)}

          <LoadingButton
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            variant="outlined"
          >
            {modalType}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}

export default memo(AuthForm);
