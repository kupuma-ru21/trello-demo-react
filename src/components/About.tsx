import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from 'contexts/AppContext';

const About = () => {
  const { state } = useContext(AppContext);
  console.log(state, 'About');
  return (
    <div>
      <h1>About</h1>
      <p>Aboutページです。</p>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};

export default About;
