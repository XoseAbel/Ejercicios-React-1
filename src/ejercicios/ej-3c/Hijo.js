import React from 'react';

/*

Tal vez quieras ver esta documentación:
https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
https://es.reactjs.org/docs/handling-events.html

*/

class Hijo extends React.Component {
  constructor(props) {
    super(props);
  }
  lukesMessage = 'NOOOOOO!';
  render() {
    return (
      <div className='alert alert-success'>
        <h4>Hijo</h4>
        <button
          className='btn btn-info'
          onClick={() => this.props.fnClick(this.lukesMessage)}
        >
          ¡Dar click aquí!
        </button>
      </div>
    );
  }
}

export default Hijo;
