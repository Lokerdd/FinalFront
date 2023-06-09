import React, { memo } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import getFields from '../../helpers/getFields';
import getSchema from '../../helpers/getSchema';
import { authRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert';
import { GOOGLE_AUTH_URL, SIGN_IN_WITH_GOOGLE } from './constants';

import './AuthForm.css';

function AuthForm() {
  const { isLoading, error } = useSelector((state) => state.auth);
  const { modalType } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const fieldTypes = getFields(modalType);
  const schema = getSchema(modalType);

  const handleGoogleButtonClick = () => {
    window.location.assign(GOOGLE_AUTH_URL);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
      }}
      validationSchema={schema}
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
                className="auth-input"
              />
              {errors[name] && touched[name] && (
                <div className="error">{errors[name]}</div>
              )}
            </div>
          ))}

          {error && fieldTypes.map(({ name }) => error[name]
            && <CustomAlert key={name} message={error[name][0]} severity="error" alertWidth="100%" />)}

          <div className="buttons">
            <LoadingButton
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              variant="outlined"
            >
              {modalType}
            </LoadingButton>
            <LoadingButton
              variant="contained"
              type="button"
              onClick={handleGoogleButtonClick}
            >
              {SIGN_IN_WITH_GOOGLE}
            </LoadingButton>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default memo(AuthForm);
