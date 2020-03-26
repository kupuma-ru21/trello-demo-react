import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

interface InputWord {
  target: { value: string };
}

const CreateNewBoardModal: React.FC = () => {
  const [inputWord, setInputWord] = useState<string>('');
  const onChange = (event: InputWord) => {
    setInputWord(event.target.value);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      What shall we call the board?
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
        <Button style={{ backgroundColor: '#181a1b' }}>CREATE</Button>
      </ButtonGroup>
    </div>
  );
};

export default CreateNewBoardModal;
