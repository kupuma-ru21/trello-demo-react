import React from 'react';
import AddListModal from 'components/AddListModal';
import AfterCloneAddListModal from 'components/AfterCloneAddListModal';

const ModalArea = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <AfterCloneAddListModal />
      <AddListModal />
    </div>
  );
};
export default ModalArea;
