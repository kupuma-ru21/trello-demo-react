import React, { useContext, useState } from 'react';
import AppContext from 'contexts/AppContext';
import { SEND_TEXT_AFER_ADD_LIST_MODAL } from 'actions/index';
import 'styles/ModalArea.scss';

interface InputWord {
  target: { value: string };
}

const AfterAddListModal = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputWord, setInputWord] = useState<string>('');
  const onChange = (event: InputWord) => {
    setInputWord(event.target.value);
  };
  const onSave = () => {
    dispatch({
      type: SEND_TEXT_AFER_ADD_LIST_MODAL,
      addListContentText: inputWord,
    });
    setInputWord('');
  };
  return (
    <div>
      {state.createBoardReducer.afterAddListModal.map(
        (val: { addListText: string }, index: number) => (
          <div key={index} className="afterAddListStyle">
            <h4
              style={{
                textAlign: 'center',
              }}
            >
              {val.addListText}
            </h4>
            <hr />
            <div style={{ margin: 10 }}>
              <label>
                <input
                  className="afterAddListStyle-input"
                  value={inputWord}
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="saveButton" onClick={onSave}>
              保存
            </div>
            <div
              style={
                state.createBoardReducer.afterAddListModalTextArea.length > 0
                  ? { marginTop: 70 }
                  : {}
              }
            >
              {state.createBoardReducer.afterAddListModalTextArea.map(
                (val: { text: string }, index: number) => (
                  <div key={index} className="addListContentText">
                    {val.text}
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AfterAddListModal;
