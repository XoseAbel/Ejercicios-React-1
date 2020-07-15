import React from 'react';

const Boton = ({ sumaClick }) => {
  return (
    <button className='btn btn-info' onClick={sumaClick}>
      suma 1
    </button>
  );
};

export default Boton;
