import { LOG_IN, SIGN_UP } from '../components/Header/constants';
import { ADD_POST, EDIT_PROFILE } from '../components/UserPageForm/constants';
import { GENERAL_FILTERS, USER_PAGE_FILTERS } from '../components/Filter/constants';

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

const generalFilters = [
  'All',
  'Tags',
  'Author',
];

const userPageFilters = [
  'All',
  'Tags',
];

const getFields = (menuType) => {
  switch (menuType) {
    case LOG_IN:
      return logInFields;
    case SIGN_UP:
      return signUpFields;
    case ADD_POST:
      return addPostFields;
    case EDIT_PROFILE:
      return editProfileFields;
    case GENERAL_FILTERS:
      return generalFilters;
    case USER_PAGE_FILTERS:
      return userPageFilters;
    default:
      return [];
  }
};

export default getFields;
