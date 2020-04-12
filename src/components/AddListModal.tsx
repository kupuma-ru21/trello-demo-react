import React, { useState, useContext } from 'react';
import AppContext from 'contexts/AppContext';
import { AFER_CLONE_ADD_LIST } from 'actions/index';
import CancelIcon from '@material-ui/icons/Cancel';
import 'styles/AddListModal.scss';

interface InputWord {
  target: { value: string };
}

const AddListModal = () => {
  const [addListFlag, setAddListFlag] = useState<boolean>(true);
  const onClick = () => {
    setAddListFlag(!addListFlag);
  };
  const [inputWord, setInputWord] = useState<string>('');
  const addListInput = (event: InputWord) => {
    setInputWord(event.target.value);
  };
  const { dispatch } = useContext(AppContext);
  const onSave = () => {
    if (inputWord !== '') {
      dispatch({ type: AFER_CLONE_ADD_LIST, addListText: inputWord });
      setAddListFlag(!addListFlag);
      setInputWord('');
    }
  };
  return (
    <div>
      <div
        className={addListFlag === true ? 'addListArea' : 'displayNone'}
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
  );
};

export default AddListModal;
