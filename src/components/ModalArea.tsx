import React from 'react';
import AddListModal from 'components/AddListModal';
import AfterAddListModal from 'components/AfterAddListModal';

const ModalArea = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <AfterAddListModal />
      <AddListModal />
    </div>
  );
};
export default ModalArea;
