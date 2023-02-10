import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import AuthForm from '../AuthForm/AuthForm';
import LogoutForm from '../LogoutForm/LogoutForm';

import toggleModal from '../../redux/actions/modal';

function CustomModal() {
  const { isOpen, modalType } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onModalClose = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  return (
    <Modal
      open={isOpen}
      onClose={onModalClose}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '30%',
          backgroundColor: '#eee',
          border: '1px solid #1976d2',
          borderRadius: '10px',
          boxShadow: `0px 11px 15px -7px rgb(0 0 0 / 20%), 
            0px 24px 38px 3px rgb(0 0 0 / 14%), 
            0px 9px 46px 8px rgb(0 0 0 / 12%)`,
          padding: '32px',
          color: '#1976d2',
          textTransform: 'uppercase',
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ marginBottom: '10px' }}
        >
          {modalType}
        </Typography>
        {modalType === 'Logout'
          ? <LogoutForm />
          : <AuthForm formType={modalType} />}
      </Box>
    </Modal>
  );
}

export default memo(CustomModal);
