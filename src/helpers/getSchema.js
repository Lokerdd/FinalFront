import * as Yup from 'yup';

import { EDIT_PROFILE, ADD_POST } from '../components/UserPageForm/constants';
import { SIGN_UP, LOG_IN } from '../components/Header/constants';

const getSchema = (formType) => {
  let shape;
  switch (formType) {
    case ADD_POST:
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

    case EDIT_PROFILE:
      shape = {
        name: Yup.string()
          .trim()
          .min(4, 'At least 4 characters without spaces!')
          .required("You can't change your name om empty string"),
      };
      return Yup.object().shape(shape);

    case SIGN_UP:
    case LOG_IN:
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

      if (formType === LOG_IN) {
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
