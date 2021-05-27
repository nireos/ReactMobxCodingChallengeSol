import React from 'react';
import './App.css';
import UserDetails from './components/DisplayUsername';
import { EditUser } from './components/EditUser';

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
       <UserDetails/>
       <EditUser/>
        <p>
          See <code>Readme.md</code> in the root directory for coding challenge
          instructions.
        </p>
        <p>- ICTBIT Dev Team</p>
      </header>
    </div>
  );
};

export default App;
