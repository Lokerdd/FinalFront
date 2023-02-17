import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import LogoutForm from '../components/LogoutForm/LogoutForm';
import UserPageForm from '../components/UserPageForm/UserPageForm';

const getForms = (modalType) => {
  switch (modalType) {
    case 'Logout':
      return <LogoutForm />;
    case 'Add Post': case 'Edit Profile':
      return <UserPageForm formType={modalType} />;
    default:
      return <AuthForm formType={modalType} />;
  }
};

export default getForms;
