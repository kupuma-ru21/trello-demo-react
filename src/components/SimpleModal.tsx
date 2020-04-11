import React, { useState, useContext, useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AppContext from 'contexts/AppContext';
import { CLONE_ADD_LIST, CLEATE_ADD_LIST } from 'actions/index';

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
  height: 100,
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
    setAddListFlag(!addListFlag);
  };

  const { state, dispatch } = useContext(AppContext);
  const onSave = () => {
    dispatch({ type: CLONE_ADD_LIST });
    setAddListFlag(!addListFlag);
  };
  useEffect(() => {
    dispatch({ type: CLEATE_ADD_LIST });
  }, [dispatch]);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {state.cloneAddList.map((val: any, index: number) => (
        <div key={index}>
          <div
            style={
              addListFlag === true ? AddListAreaStyle : { display: 'none' }
            }
            onClick={onClick}
          >
            {val.addListText}
          </div>
          <div style={addListFlag === false ? modalStyle : { display: 'none' }}>
            <div>
              <form style={{ position: 'relative', marginBottom: 20 }}>
                <input style={inputStyle} placeholder="add a list" />
                <CancelIcon
                  style={{
                    position: 'absolute',
                    right: '-20px',
                    top: '-25px',
                    cursor: 'pointer',
                  }}
                  onClick={onClick}
                />
              </form>
              <div
                style={{
                  textAlign: 'center',
                  backgroundColor: '#9fe7a4',
                  width: 80,
                  padding: '10px 0',
                  borderRadius: 5,
                  float: 'right',
                  cursor: 'pointer',
                }}
                onClick={onSave}
              >
                {val.saveText}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SimpleModal;
