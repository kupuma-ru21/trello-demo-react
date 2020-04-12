import React, { useContext, useState } from 'react';
import AppContext from 'contexts/AppContext';
import 'styles/ModalArea.scss';

interface InputWord {
  target: { value: string };
}

const AfterAddListModal = () => {
  const { state } = useContext(AppContext);
  const [inputWord, setInputWord] = useState<string>('');
  const onChange = (event: InputWord) => {
    setInputWord(event.target.value);
    console.log(inputWord);
  };
  const samplaArray = [];
  const onSave = () => {
    samplaArray.push({ text: inputWord });
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
              {console.log(val)}
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
          </div>
        )
      )}
    </div>
  );
};

export default AfterAddListModal;
