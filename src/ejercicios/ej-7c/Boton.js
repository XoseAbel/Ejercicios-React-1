import React from 'react';

class Boton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className='btn btn-info' onClick={this.props.fnClick}>
        suma 1
      </button>
    );
  }
}

export default Boton;
