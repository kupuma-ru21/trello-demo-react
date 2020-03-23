import React, { useState, useCallback } from 'react';
import HeaderLogo from 'assets/trello_demo.png';

const Header: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      {/* <HeaderLogo /> */}
      <p>{count}</p>
      <button onClick={handleClick}>+ 1</button>
    </div>
  );
};

export default Header;
