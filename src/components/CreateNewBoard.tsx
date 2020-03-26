import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import CreateNewBoardModal from 'components/CreateNewBoardModal';

import AppContext from 'contexts/AppContext';
const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
    marginTop: -5,
    borderTop: '1px solid rgb(240,240,240)',
    backgroundColor: '#9fe7a4',
    width: 313,
    borderRadius: '0 0 5.5px 5.5px',
  },
}));

const buttonStyle = {
  backgroundColor: '#9fe7a4',
  width: 345,
  margin: 20,
  padding: '30px 0',
  borderRadius: 5.5,
};

const CreateNewBoard: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState<boolean>(false);
  const [placement, setPlacement] = useState<any>();
  const classes = useStyles();

  console.log(anchorEl, 'anchorEl');
  console.log(placement, 'anchorEl');

  // あとでちゃんとした型づけ (newPlacement: any) (event: any)
  const handleClick = (newPlacement: any) => (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        <Paper className={classes.typography}>
          <CreateNewBoardModal />
        </Paper>
      </Popper>
      <Button onClick={handleClick('bottom-start')} style={buttonStyle}>
        <h4>Creating a board</h4>
      </Button>
    </div>
  );
};

export default CreateNewBoard;
