import React from 'react';
import CreateNewBoard from 'components/CreateNewBoard';
import CreatedBoard from 'components/CreatedBoard';

const DisplayBoardArea = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <CreateNewBoard />
      <CreatedBoard />
    </div>
  );
};

export default DisplayBoardArea;
