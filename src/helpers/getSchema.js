import * as Yup from 'yup';

const getSchema = (formType) => {
  let shape;
  switch (formType) {
    case 'Add Post':
      shape = {
        header: Yup.string()
          .trim()
          .required('Required'),
        description: Yup.string()
          .trim()
          .required('Required'),
        tags: Yup.string(),
      };
      return Yup.object().shape(shape);

    case 'Sign Up':
    case 'Log In':
      shape = {
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

      if (formType === 'Log In') {
        return Yup.object().shape(shape);
      }

      shape.name = Yup.string()
        .trim()
        .min(4, 'At least 4 characters without spaces!')
        .required('Required');
      return Yup.object().shape(shape);

    default:
      return Yup.object().shape({});
  }
};

export default getSchema;
