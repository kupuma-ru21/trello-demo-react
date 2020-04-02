import React, { useContext } from 'react';
import AppContext from 'contexts/AppContext';
import { Link } from 'react-router-dom';

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

const Board = () => {
  const { state } = useContext(AppContext);
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
  return (
    <>
      {firstLineArray.map((val: any, index: number) => (
        <Link to="/about">
          <div key={index} style={boardStyle}>
            <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
          </div>
        </Link>
      ))}
      {secondLineArray.length > 0
        ? secondLineArray.map((val: any, index: number) => (
            <Link to="/about">
              <div key={index} style={secondLineStyle}>
                <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
              </div>
            </Link>
          ))
        : ''}
      {afterThirdLine.length > 0
        ? afterThirdLine.map((val: any, index: number) => (
            <Link to="/about">
              <div key={index} style={boardStyle}>
                <h4 style={{ textAlign: 'center' }}>{val.text}</h4>
              </div>
            </Link>
          ))
        : ''}
    </>
  );
};

export default Board;
