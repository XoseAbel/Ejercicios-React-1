import React from 'react';

const MyState = () => {
  const [text, setText] = React.useState('Hola Mundo');
  return (
    <div className='alert alert-primary'>
      <p>El valor por defecto del estado es: {text}</p>
    </div>
  );
};

export default MyState;
