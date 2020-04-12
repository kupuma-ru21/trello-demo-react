import React, { useContext, useState } from 'react';
import AppContext from 'contexts/AppContext';
import { SEND_TEXT_AFER_ADD_LIST_MODAL } from 'actions/index';
import 'styles/AfterAddListModal.scss';

interface InputWord {
  target: { value: string };
}

const AfterAddListModal = () => {
  const { state, dispatch } = useContext(AppContext);
  const [inputWord, setInputWord] = useState<string>('');
  const onChange = (event: InputWord) => {
    setInputWord(event.target.value);
  };
  const onSave = (event: any) => {
    const id = Number(event.currentTarget.dataset.index);
    dispatch({
      type: SEND_TEXT_AFER_ADD_LIST_MODAL,
      id,
      addListContentText: inputWord,
    });
    setInputWord('');
  };
  return (
    <div>
      {state.createBoardReducer.afterAddListModal.map(
        (val: { addListText: string }, afterAddListModalIndex: number) => (
          <div key={afterAddListModalIndex} className="afterAddListStyle">
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
            <div
              className="saveButton"
              data-index={afterAddListModalIndex}
              onClick={onSave}
            >
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
                (
                  val: { id: number; text: string },
                  afterAddListModalTextAreaIndex: number
                ) => (
                  <div
                    key={afterAddListModalTextAreaIndex}
                    className={
                      val.id === afterAddListModalIndex
                        ? 'addListContentText'
                        : ''
                    }
                  >
                    {val.id === afterAddListModalIndex ? val.text : ''}
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
