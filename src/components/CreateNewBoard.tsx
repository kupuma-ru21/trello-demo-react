import React, { useContext, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CreateNewBoardModal from 'components/CreateNewBoardModal';
import AppContext from 'contexts/AppContext';
import { CRRENT_WINDOW_WIDTH } from 'actions/index';

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
};

const boardStyleAddMarginTop = {
  backgroundColor: '#0387c7',
  width: 345,
  margin: '200px 20px 20px 20px ',
  padding: '25px 0',
  borderRadius: 5.5,
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

  // ここ自作
  const { state, dispatch } = useContext(AppContext);
  console.log(state);
  const [modalFlag, setModalFlag] = useState(false);

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen(prev => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
    // モーダル開閉のflag
    setModalFlag(!modalFlag);
    dispatch({
      type: CRRENT_WINDOW_WIDTH,
      createdBordArray: state.createdBordArray,
    });
  };

  // ↓ windowサイズでどうにか判別したい
  window.addEventListener('resize', () => {
    dispatch({
      type: CRRENT_WINDOW_WIDTH,
      createdBordArray: state.createdBordArray,
    });
  });

  /*
    モーダル開いてる時
    2行目の配列だけにmarginTopを付与する為、配列を切り分ける処理
  */
  const firstLineArray =
    window.innerWidth > 1154 && state.createdBordArray.length > 2
      ? state.createdBordArray.slice(0, 2)
      : state.createdBordArray;
  const secondLineArray =
    window.innerWidth > 1154 && state.createdBordArray.length > 2
      ? state.createdBordArray.slice(2, 5)
      : [];
  const afterThirdLine =
    window.innerWidth > 1154 && state.createdBordArray.length > 2
      ? state.createdBordArray.slice(5)
      : [];

  const secondLineStyle =
    modalFlag === true ? boardStyleAddMarginTop : boardStyle;

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
      {firstLineArray.map((val: any, index: number) => (
        <div key={index} style={boardStyle}>
          <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
        </div>
      ))}
      {secondLineArray.length > 0
        ? secondLineArray.map((val: any, index: number) => (
            <div key={index} style={secondLineStyle}>
              <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
            </div>
          ))
        : ''}
      {afterThirdLine.length > 0
        ? afterThirdLine.map((val: any, index: number) => (
            <div key={index} style={boardStyle}>
              <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
            </div>
          ))
        : ''}
    </>
  );
};

export default CreateNewBoard;
