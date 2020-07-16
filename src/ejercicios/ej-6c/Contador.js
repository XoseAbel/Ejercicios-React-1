import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  sumaClick = () => {
    // Ingresa aquí tu código para aumentar el contador
    this.setState(() => ({ ...this.state, counter: this.state.counter + 1 }));
  };

  render() {
    return (
      <div className='alert alert-primary'>
        <p>
          <b>Has dado {this.state.counter} clicks</b>
        </p>
        <button className='btn btn-info' onClick={this.sumaClick}>
          suma 1
        </button>
      </div>
    );
  }
}

export default Contador;
