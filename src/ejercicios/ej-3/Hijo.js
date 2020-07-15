import React from 'react';

/*

Tal vez quieras ver esta documentación:
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
https://es.reactjs.org/docs/handling-events.html

*/

const Hijo = props => {
  const lukesMessage = 'NOOOOOO!';

  const handleText = () => {
    props.fn(lukesMessage);
  };

  return (
    <div className='alert alert-success'>
      <h4>Hijo</h4>
      <button className='btn btn-info' onClick={() => props.fn(lukesMessage)}>
        ¡Dar click aquí!
      </button>
      <button className='btn btn-info' onClick={handleText}>
        ¡Dar click aquí!
      </button>
    </div>
  );
};

export default Hijo;
