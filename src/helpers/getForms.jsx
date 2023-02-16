import React from 'react';
import AuthForm from '../components/AuthForm/AuthForm';
import LogoutForm from '../components/LogoutForm/LogoutForm';
import AddPostForm from '../components/AddPostForm/AddPostForm';

const getForms = (modalType) => {
  switch (modalType) {
    case 'Logout':
      return <LogoutForm />;
    case 'Add Post':
      return <AddPostForm />;
    default:
      return <AuthForm formType={modalType} />;
  }
};

export default getForms;
