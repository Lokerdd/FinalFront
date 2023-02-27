import { useLocation } from 'react-router-dom';

import { LOG_IN, SIGN_UP } from '../components/Header/constants';
import { ADD_POST, EDIT_PROFILE } from '../components/UserPageForm/constants';
import FILTERS from '../components/Filter/constants';

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
  const location = useLocation();

  switch (menuType) {
    case LOG_IN:
      return logInFields;
    case SIGN_UP:
      return signUpFields;
    case ADD_POST:
      return addPostFields;
    case EDIT_PROFILE:
      return editProfileFields;
    case FILTERS:
      return location.pathname.includes('users')
        ? userPageFilters
        : generalFilters;
    default:
      return [];
  }
};

export default getFields;
