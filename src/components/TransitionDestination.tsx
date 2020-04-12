import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'contexts/AppContext';
import ModalArea from 'components/ModalArea';

const textBackStyle = {
  display: 'flex',
  justifyContent: 'start',
  paddingTop: 20,
  width: '100%',
};

const textStyle = {
  backgroundColor: '#9fe7a4',
  padding: '10px 60px',
  margin: '0 0 0 50px',
};

const About = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <div style={textBackStyle}>
        <h1 style={textStyle}>{state.homeReducer.transitionText}</h1>
      </div>
      <ModalArea />
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};

export default About;
