import React, { useState, useContext, useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AppContext from 'contexts/AppContext';
import { CLEATE_ADD_LIST, AFER_CLONE_ADD_LIST } from 'actions/index';

const AddListAreaStyle = {
  display: 'flex',
  backgroundColor: '#0a2c74',
  margin: 20,
  padding: '40px 40px',
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
const afterCloneAddListStyle = {
  backgroundColor: '#575757',
  display: 'inline-block',
  verticalAlign: 'top',
  padding: '5px 10px',
  margin: 20,
};
interface InputWord {
  target: { value: string };
}

const SimpleModal = () => {
  const [addListFlag, setAddListFlag] = useState<boolean>(true);
  const onClick = () => {
    setAddListFlag(!addListFlag);
  };
  const [inputWord, setInputWord] = useState<string>('');
  const addListInput = (event: InputWord) => {
    setInputWord(event.target.value);
  };

  const { state, dispatch } = useContext(AppContext);
  const onSave = () => {
    if (inputWord !== '') {
      dispatch({ type: AFER_CLONE_ADD_LIST, addListText: inputWord });
      setAddListFlag(!addListFlag);
      setInputWord('');
    }
  };
  useEffect(() => {
    dispatch({ type: CLEATE_ADD_LIST });
  }, [dispatch]);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {state.createBoardReducer.afterCloneAddList.map(
        (val: { addListText: string }, index: number) => (
          <div key={index} style={afterCloneAddListStyle}>
            <h4
              style={{
                textAlign: 'center',
              }}
            >
              {val.addListText}
            </h4>
            <hr />
            <label>
              <input
                style={{
                  padding: '11px 15px',
                  fontSize: 16,
                  borderRadius: 5,
                  width: 200,
                }}
              ></input>
            </label>
          </div>
        )
      )}
      {state.createBoardReducer.cloneAddList.map((val: any, index: number) => (
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
                <input
                  style={inputStyle}
                  placeholder="add a list"
                  value={inputWord}
                  onChange={addListInput}
                />
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
