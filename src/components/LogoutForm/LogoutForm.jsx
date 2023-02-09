import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '@mui/lab/LoadingButton';

// import { authRequest } from '../../redux/actions/auth';
import CustomAlert from '../CustomAlert/CustomAlert';
import toggleModal from '../../redux/actions/modal';

import './LogoutForm.css';

function LogoutForm() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const noBtnPressed = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  return (
    <div className="logout-form">
      <span>Are you sure you want to logout?</span>

      <div className="buttons">
        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          variant="outlined"
        >
          Yes
        </LoadingButton>

        <LoadingButton
          loading={isLoading}
          disabled={isLoading}
          variant="outlined"
          onClick={noBtnPressed}
        >
          No
        </LoadingButton>
      </div>

      {error && <CustomAlert message={error} severity="error" />}
    </div>
  );
}

export default memo(LogoutForm);
