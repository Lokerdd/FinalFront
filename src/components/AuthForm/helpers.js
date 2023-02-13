import * as Yup from 'yup';

import { LOG_IN, SIGN_UP } from '../Header/constants';

const logInFields = [
  {
    name: 'email',
    type: 'text',
  },
  {
    name: 'password',
    type: 'password',
  },
];

const signUpFields = [
  {
    name: 'name',
    type: 'text',
  },
  ...logInFields,
];

export const getFields = (modalType) => {
  switch (modalType) {
    case LOG_IN:
      return logInFields;
    case SIGN_UP:
      return signUpFields;
    default:
      return [];
  }
};

export const getSchema = (formType) => {
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
