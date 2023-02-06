import * as actionTypes from '../actionTypes';

const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});

export default toggleModal;
