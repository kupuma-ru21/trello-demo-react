import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Aboutページです。</p>
      <Link to="/">Homeへ戻る</Link>
    </div>
  );
};

export default About;
