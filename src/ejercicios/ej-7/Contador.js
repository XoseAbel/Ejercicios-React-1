import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

const Contador = () => {
  const [counter, setCounter] = React.useState(0);

  const handleCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div className='alert alert-primary'>
      <MyLabel value={counter} />
      <Boton sumaClick={handleCounter} />
    </div>
  );
};

export default Contador;
