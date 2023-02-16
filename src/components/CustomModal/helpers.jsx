import React from 'react';
import AuthForm from '../AuthForm/AuthForm';
import LogoutForm from '../LogoutForm/LogoutForm';
import AddPostForm from '../AddPostForm/AddPostForm';

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
