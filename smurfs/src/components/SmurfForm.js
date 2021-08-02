import React, { useContext } from 'react';
import { useForm } from '../hooks/useForm';
import axios from 'axios';

import { SmurfContext } from '../contexts/smurfContext';

const initialValue = {
  name: '',
  age: '',
  height: ''
};

const SmurfForm = () => {
  const [values, handleChanges] = useForm(initialValue);
  const { updateSmurf } = useContext(SmurfContext);

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        updateSmurf(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <label htmlFor='name'>Name:</label>
      <input
        id='name'
        type='text'
        name='name'
        value={values.name}
        onChange={handleChanges}
        placeholder='Name'
      />
      <label htmlFor='age'>Age:</label>
      <input
        id='age'
        type='number'
        name='age'
        value={values.age}
        onChange={handleChanges}
        placeholder='Age'
      />
      <label htmlFor='height'>Height:</label>
      <input
        id='height'
        type='text'
        name='height'
        value={values.height}
        onChange={handleChanges}
        placeholder='Height'
      />
      <button className='submit'>Submit!</button>
    </form>
  );
};

export default SmurfForm;
