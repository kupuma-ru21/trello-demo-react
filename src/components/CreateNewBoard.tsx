import React, { useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CreateNewBoardModal from 'components/CreateNewBoardModal';
import AppContext from 'contexts/AppContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
    typography: {
      padding: theme.spacing(2),
      marginTop: -5,
      borderTop: '1px solid rgb(240,240,240)',
      backgroundColor: '#9fe7a4',
      width: 313,
      borderRadius: '0 0 5.5px 5.5px',
    },
  })
);

const boardStyle = {
  backgroundColor: '#0387c7',
  width: 345,
  margin: 20,
  padding: '25px 0',
  borderRadius: 5.5,
  marginTop: 100,
};

const buttonStyle = {
  backgroundColor: '#9fe7a4',
  width: 345,
  margin: 20,
  padding: '30px 0',
  borderRadius: 5.5,
};

const CreateNewBoard: React.FC = () => {
  // materialUIの値に対しての型づけはあとで行う。 調べたけどよくわかんない
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const classes = useStyles();

  const { state, dispatch } = useContext(AppContext);
  const addMarginTopArray =
    state.createdBordArray.length > 1 ? state.createdBordArray.slice(2) : [];

  const [modalFlag, setModalFlag] = useState(false);

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    setModalFlag(!modalFlag);
  };
  console.log(state.createdBordArray.length, 'state.createdBordArray.length');
  console.log(addMarginTopArray, 'addMarginTopArray');

  return (
    <>
      <Button onClick={handleClick('bottom-start')} style={buttonStyle}>
        <h4>Creating a board</h4>
      </Button>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        <Paper className={classes.typography}>
          <CreateNewBoardModal />
        </Paper>
      </Popper>
      {state.createdBordArray.map((val: any, index: number) => (
        <div key={index} style={boardStyle}>
          <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
        </div>
      ))}
      {addMarginTopArray.map((val: any, index: number) => (
        <div key={index} style={boardStyle}>
          <h4>{val.text}</h4>
        </div>
      ))}
    </>
  );
};

export default CreateNewBoard;
