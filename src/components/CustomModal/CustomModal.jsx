import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import AuthForm from '../AuthForm/AuthForm';

import toggleModal from '../../redux/actions/modal';

import './CustomModal.css';

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
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalType}
        </Typography>
        <AuthForm
          formType={modalType}
        />
      </Box>
    </Modal>
  );
}

export default memo(CustomModal);
