import React, { useState } from 'react';

const AddListAreaStyle = {
  display: 'flex',
  backgroundColor: '#0a2c74',
  margin: 20,
  padding: '20px 40px',
  borderRadius: 5,
  width: 'fit-content',
  cursor: 'pointer',
};

const modalStyle = {
  backgroundColor: '#575757',
  padding: '20px 12px',
  width: 250,
  margin: '20px 0',
  height: 75,
  borderRadius: 5,
  marginLeft: 20,
};

const inputStyle = {
  border: '2.5px solid',
  borderRadius: 5,
  fontSize: 16,
  padding: '11px 15px',
};

const SimpleModal = () => {
  const [addListFlag, setAddListFlag] = useState(true);
  const onClick = () => {
    setAddListFlag(false);
  };

  return (
    <div>
      <div
        style={addListFlag === true ? AddListAreaStyle : { display: 'none' }}
        onClick={onClick}
      >
        <h4>Add a list...</h4>
      </div>
      <div style={addListFlag === false ? modalStyle : { display: 'none' }}>
        <form>
          <input style={inputStyle} placeholder="add a list" />
        </form>
      </div>
    </div>
  );
};
export default SimpleModal;
