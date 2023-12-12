import React from 'react';
import logo from './logo.svg'
import Countdown from './Component/Count';


const App = () => {
  const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#282c34', // Example background color
    color: 'white',
  };

  const logoStyle = {
    width: '100px', // Example width
    height: '100px', // Example height
  };

  return (
    <div className='App'>
      <header style={headerStyle}>
        <h2>
         Countdown Timer  <span className='small'> with</span>
        </h2>
        <img src={logo} style={logoStyle} className='App-logo' alt='logo' />
      </header>
      <main>
        <Countdown />
      </main>
    </div>
  );
};

export default App;

