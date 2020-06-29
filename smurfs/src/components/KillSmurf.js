import React, { useContext } from 'react';
import axios from 'axios';

import { SmurfContext } from '../contexts/smurfContext';

const KillSmurf = ({ id }) => {
  const { updateSmurf } = useContext(SmurfContext);

  const dieSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        updateSmurf(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <button className='kill-smurf' onClick={() => dieSmurf(id)}>
      <i className='fas fa-skull'></i>
    </button>
  );
};

export default KillSmurf;
