import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

import { logoutRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert';
import toggleModal from '../../redux/actions/modal';
import { YES_BUTTON_VALUE, NO_BUTTON_VALUE } from './constants';

import './LogoutForm.css';

function LogoutForm() {
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const noBtnPressed = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  const yesBtnPressed = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className="logout-form">
      <span>Are you sure you want to logout?</span>

      <div className="buttons">
        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          variant="outlined"
          onClick={yesBtnPressed}
        >
          {YES_BUTTON_VALUE}
        </LoadingButton>

        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          variant="outlined"
          onClick={noBtnPressed}
        >
          {NO_BUTTON_VALUE}
        </LoadingButton>
      </div>

      {error && <CustomAlert message={error} severity="error" />}
    </div>
  );
}

export default memo(LogoutForm);
