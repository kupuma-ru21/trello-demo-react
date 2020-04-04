import React, { useContext } from 'react';
import AppContext from 'contexts/AppContext';
import { Link } from 'react-router-dom';
import { TRANSITION_TEXT } from 'actions/index';

const boardStyle = {
  backgroundColor: '#0387c7',
  width: 345,
  margin: 20,
  padding: '25px 0',
  borderRadius: 5.5,
  textDecoration: 'unset',
  color: 'aliceblue',
};

const boardStyleAddMarginTop = {
  backgroundColor: '#0387c7',
  width: 345,
  margin: '200px 20px 20px 20px ',
  padding: '25px 0',
  borderRadius: 5.5,
  textDecoration: 'unset',
  color: 'aliceblue',
};

const Board = () => {
  const { state } = useContext(AppContext);
  state.createdBordArray =
    localStorage.storageArray === undefined
      ? state.createdBordArray
      : JSON.parse(localStorage.storageArray);
  /*
    モーダル開いてる時
    2行目の配列だけにmarginTopを付与する為、配列を切り分ける処理
  */
  let firstLineArray = [];
  let secondLineArray = [];
  let afterThirdLine = [];
  if (window.innerWidth > 1154) {
    firstLineArray = state.createdBordArray.slice(0, 2);
    secondLineArray = state.createdBordArray.slice(2, 5);
    afterThirdLine = state.createdBordArray.slice(5);
  }
  if (1155 > window.innerWidth && window.innerWidth > 770) {
    firstLineArray = state.createdBordArray.slice(0, 1);
    secondLineArray = state.createdBordArray.slice(1, 3);
    afterThirdLine = state.createdBordArray.slice(3);
  }
  if (window.innerWidth < 770) {
    secondLineArray = state.createdBordArray.slice(0, 1);
    afterThirdLine = state.createdBordArray.slice(1);
  }
  const secondLineStyle =
    state.openFlag === true ? boardStyleAddMarginTop : boardStyle;
  const { dispatch } = useContext(AppContext);
  const onClick = (event: any) => {
    dispatch({ type: TRANSITION_TEXT, text: event.currentTarget.dataset.text });
  };
  return (
    <>
      {firstLineArray.map((val: any, index: number) => (
        <Link
          to="/createdBoard"
          key={index}
          style={boardStyle}
          data-text={val.text}
          onClick={onClick}
        >
          <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
        </Link>
      ))}
      {secondLineArray.length > 0
        ? secondLineArray.map((val: any, index: number) => (
            <Link
              to="/createdBoard"
              key={index}
              style={secondLineStyle}
              onClick={onClick}
            >
              <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
            </Link>
          ))
        : ''}
      {afterThirdLine.length > 0
        ? afterThirdLine.map((val: any, index: number) => (
            <Link
              to="/createdBoard"
              key={index}
              style={boardStyle}
              onClick={onClick}
            >
              <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
            </Link>
          ))
        : ''}
    </>
  );
};

export default Board;
