import React, { useState, useContext } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppContext from 'contexts/AppContext';
import { CREATE_NEW_BOARD } from 'actions/index';

interface InputWord {
  target: { value: string };
}

const CreateNewBoardModal: React.FC = () => {
  const { dispatch } = useContext(AppContext);
  const [inputWord, setInputWord] = useState<string>('');
  const onChange = (event: InputWord) => {
    setInputWord(event.target.value);
  };
  const onClick = () => {
    dispatch({ type: CREATE_NEW_BOARD, text: inputWord });
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <p>What shall we call the board?</p>
      <Input
        style={{
          backgroundColor: '#181a1b',
          width: 235,
          borderRadius: 5.5,
          height: 45,
        }}
        onChange={onChange}
      />
      <ButtonGroup size="large" style={{ margin: 20 }}>
        <Button>CANCEL</Button>
        <Button style={{ backgroundColor: '#181a1b' }} onClick={onClick}>
          CREATE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CreateNewBoardModal;
