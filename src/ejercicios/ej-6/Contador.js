import React from 'react';

const Contador = () => {
  const [counter, setCounter] = React.useState(0);

  const sumaClick = () => {
    let newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div className='alert alert-primary'>
      <p>
        <b>Has dado {counter} clicks</b>
      </p>
      <button className='btn btn-info' onClick={sumaClick}>
        suma 1
      </button>
    </div>
  );
};

export default Contador;
