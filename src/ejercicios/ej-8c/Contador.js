import React from 'react';
import Par from './Par';
import Impar from './Impar';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      showMessageEven: true,
    };
  }

  setCounter = () => {
    this.setState(
      () => ({
        ...this.state,
        counter: this.state.counter + 1,
        showMessageEven: this.soyPar(this.state.counter + 1),
      }),
      () => console.log(this.state)
    );
  };

  soyPar = num => {
    // Esta función regresa un TRUE si el número es par o FALSE si es impar. (No es necesario modificar esta función)
    console.log(num % 2 === 0);
    return num % 2 === 0;
  };

  // PISTA: Puedes utilizar operadores ternarios
  // PISTA 2: https://reactjs.org/docs/conditional-rendering.html
  render() {
    return (
      <div className='alert alert-primary'>
        <p>Haz dado {this.state.counter} clicks</p>
        <button onClick={this.setCounter}>suma 1</button>
        {this.state.showMessageEven && <Par />}
        {!this.state.showMessageEven && <Impar />}
      </div>
    );
  }
}

export default Contador;
