import React from 'react';
import MyLabel from './MyLabel';
import Boton from './Boton';

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
        <MyLabel text={this.state.counter} />
        <Boton fnClick={this.sumaClick} />
      </div>
    );
  }
}

export default Contador;
