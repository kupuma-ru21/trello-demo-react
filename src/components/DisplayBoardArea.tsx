import React, { useContext } from 'react';
import CreateNewBoard from 'components/CreateNewBoard';
import AppContext from 'contexts/AppContext';

const DisplayBoardArea = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <CreateNewBoard />
    </div>
  );
};

export default DisplayBoardArea;
