import React, { memo } from 'react';
import {
  Formik,
  Form,
  Field,
} from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import getSchema from './helpers';
import { fields, ADD_POST } from './constants';
import CustomAlert from '../CustomAlert/CustomAlert';
import { sendNews } from '../../redux/actions/user';

import './AddPostForm.css';

function AddPostForm() {
  const { isLoading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        header: '',
        description: '',
        tags: '',
      }}
      validationSchema={getSchema()}
      onSubmit={(values) => {
        const toSend = new FormData();
        toSend.append('header', values.header);
        toSend.append('description', values.description);
        if (values.tags) {
          toSend.append('tags', values.tags);
        }
        if (values.image) {
          toSend.append('image', values.image);
        }
        dispatch(sendNews(toSend));
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form
          className="add-post-form"
        >
          {fields.map(({ name }) => (
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

          <input
            id="image"
            name="image"
            type="file"
            onChange={(event) => {
              setFieldValue('image', event.currentTarget.files[0]);
            }}
          />

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
            {ADD_POST}
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
}

export default memo(AddPostForm);
