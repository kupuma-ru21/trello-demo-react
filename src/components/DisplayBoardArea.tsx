import React from 'react';
import CreateNewBoard from 'components/CreateNewBoard';

const DisplayBoardArea = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <CreateNewBoard />
    </div>
  );
};

export default DisplayBoardArea;
