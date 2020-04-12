import React, { useState, useContext } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import AppContext from 'contexts/AppContext';
import { AFER_CLONE_ADD_LIST } from 'actions/index';
import 'styles/ModalArea.scss';

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
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {state.createBoardReducer.afterCloneAddList.map(
        (val: { addListText: string }, index: number) => (
          <div key={index} className="afterCloneAddListStyle">
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
                <input className="afterCloneAddListStyle-input"></input>
              </label>
            </div>
            <div className="saveButton">保存</div>
          </div>
        )
      )}
      <div>
        <div
          className={addListFlag === true ? 'AddListAreaStyle' : 'displayNone'}
          onClick={onClick}
        >
          Add a list...
        </div>
        <div className={addListFlag === false ? 'modalStyle' : 'displayNone'}>
          <div>
            <form style={{ position: 'relative', marginBottom: 20 }}>
              <input
                className="inputStyle"
                placeholder="add a list"
                value={inputWord}
                onChange={addListInput}
              />
              <CancelIcon className="cancelIcon" onClick={onClick} />
            </form>
            <div className="saveButton" onClick={onSave}>
              保存
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SimpleModal;
