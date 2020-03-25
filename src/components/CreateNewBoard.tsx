import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import CreateNewBoardModal from 'components/CreateNewBoardModal';

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

const CreateNewBoard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  // あとでちゃんとした型づけ (newPlacement: any) (event: any)
  const handleClick = (newPlacement: any) => (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Paper>
              <Typography className={classes.typography}>
                <CreateNewBoardModal />
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button onClick={handleClick('bottom-start')} style={buttonStyle}>
        <h4>Creating a board</h4>
      </Button>
    </div>
  );
};

export default CreateNewBoard;
