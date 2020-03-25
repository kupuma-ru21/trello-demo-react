import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CreateNewBoardModal: React.FC = () => {
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
      />
      <ButtonGroup size="large" style={{ margin: 20 }}>
        <Button>CANCEL</Button>
        <Button style={{ backgroundColor: '#181a1b' }}>CREATE</Button>
      </ButtonGroup>
    </div>
  );
};

export default CreateNewBoardModal;
