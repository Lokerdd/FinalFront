import { LOG_IN, SIGN_UP } from '../components/Header/constants';
import { ADD_POST, EDIT_PROFILE } from '../components/UserPageForm/constants';

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

const addPostFields = [
  'header',
  'description',
  'tags',
];

const editProfileFields = [
  'name',
];

const getFields = (modalType) => {
  switch (modalType) {
    case LOG_IN:
      return logInFields;
    case SIGN_UP:
      return signUpFields;
    case ADD_POST:
      return addPostFields;
    case EDIT_PROFILE:
      return editProfileFields;
    default:
      return [];
  }
};

export default getFields;
