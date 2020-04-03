import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from 'contexts/AppContext';

const targetStyle = {
  display: 'flex',
  justifyContent: 'start',
  paddingTop: 20,
  width: '100%',
};

const sampleStyle = {
  backgroundColor: '#9fe7a4',
  padding: '10px 60px',
  margin: '0 0 0 50px',
};

const About = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      <div style={targetStyle}>
        <h1 style={sampleStyle}>{state.transitionText}</h1>
      </div>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};

export default About;
