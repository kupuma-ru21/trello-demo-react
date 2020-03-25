import React from 'react';
import Header from 'components/Header';
import CreateNewBoard from 'components/CreateNewBoard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <CreateNewBoard />
    </div>
  );
};

export default App;
