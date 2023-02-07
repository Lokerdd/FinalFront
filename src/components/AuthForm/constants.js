import * as Yup from 'yup';

export const EMAIL = 'email';
export const NAME = 'name';
export const PASSWORD = 'password';

export const fieldTypes = [
  {
    name: 'email',
    type: 'text',
  },
  {
    name: 'name',
    type: 'text',
  },
  {
    name: 'password',
    type: 'password',
  },
];

export const schema = (formType) => {
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
