import React, { memo, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import { getSchema, getFields } from './helpers';
import { authRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert/CustomAlert';

import './AuthForm.css';

function AuthForm() {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.auth);
  const { modalType } = useSelector((state) => state.modal);

  const [errorMessages, setErrorMessages] = useState();

  const fieldTypes = getFields(modalType);

  if (error) {
    fieldTypes.forEach(({ name }) => {
      if (error[name]) setErrorMessages(errorMessages.concat(error[name]));
    });
  }

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      validationSchema={getSchema(modalType)}
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
