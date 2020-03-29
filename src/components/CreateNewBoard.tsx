import React, { useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CreateNewBoardModal from 'components/CreateNewBoardModal';
import AppContext from 'contexts/AppContext';
import { SEND_OPEN_FLAG } from 'actions/index';

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

const buttonStyle = {
  backgroundColor: '#9fe7a4',
  width: 345,
  margin: 20,
  padding: '30px 0',
  borderRadius: 5.5,
};

const CreateNewBoard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();
  const classes = useStyles();

  const { state, dispatch } = useContext(AppContext);
  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setPlacement(newPlacement);
    dispatch({ type: SEND_OPEN_FLAG, modalFlag: state.openFlag });
  };

  return (
    <>
      <Button onClick={handleClick('bottom-start')} style={buttonStyle}>
        <h4>Creating a board</h4>
      </Button>
      <Popper
        open={state.openFlag}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        <Paper className={classes.typography}>
          <CreateNewBoardModal />
        </Paper>
      </Popper>
    </>
  );
};

export default CreateNewBoard;
