import React, { memo } from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import getSchema from '../../helpers/getSchema';
import getFields from '../../helpers/getFields';
import CustomAlert from '../CustomAlert/CustomAlert';
import { sendNews, editProfile } from '../../redux/actions/user';
import { ADD_POST, EDIT_PROFILE } from './constants';

import './UserPageForm.css';

function UserPageForm() {
  const { user: { name: username }, isLoading, error } = useSelector((state) => state.user);
  const { modalType } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const fields = getFields(modalType);

  return (
    <Formik
      initialValues={{
        header: '',
        description: '',
        tags: '',
        name: username,
      }}
      validationSchema={getSchema(modalType)}
      onSubmit={(values) => {
        if (modalType === ADD_POST) dispatch(sendNews(values));
        if (
          modalType === EDIT_PROFILE
          && (values.name !== username || values.image)
        ) {
          dispatch(editProfile(values));
        }
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form className="add-post-form">
          {fields.map((name) => (
            <div key={name}>
              <span>{`${name.charAt(0).toUpperCase()}${name.slice(1)}:`}</span>
              <Field
                id={name}
                name={name}
                type="text"
                className="add-post-input"
              />
              {errors[name] && touched[name] && (
                <div className="error">{errors[name]}</div>
              )}
            </div>
          ))}

          <div>
            <span>Image:</span>
            <input
              id="image"
              name="image"
              type="file"
              className="add-post-input"
              onChange={(event) => {
                setFieldValue('image', event.currentTarget.files[0]);
              }}
            />
          </div>

          {error
            && (
              <CustomAlert
                message={error}
                severity="error"
                alertWidth="100%"
              />
            )}

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

export default memo(UserPageForm);
