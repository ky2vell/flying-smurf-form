import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { SmurfContext } from './contexts/smurfContext';

// Components
import Header from './components/Header';
import RandomSmurf from './components/RandomSmurf';
import SmurfForm from './components/SmurfForm';

const App = () => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err.response));
  }, []);

  const updateSmurf = smurf => {
    setSmurfs(smurf);
  };

  return (
    <SmurfContext.Provider value={{ smurfs, updateSmurf }}>
      <div className='container'>
        <Header />
        <SmurfForm />
        {smurfs.map(smurf => (
          <RandomSmurf key={smurf.id} id={smurf.id} name={smurf.name} />
        ))}
      </div>
    </SmurfContext.Provider>
  );
};

export default App;
