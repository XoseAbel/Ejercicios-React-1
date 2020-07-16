import React from 'react';

class Hijo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='alert alert-success'>
        <h4>Hijo</h4>
        <button className='btn btn-info' onClick={this.props.fnClick}>
          ¡Dar click aquí!
        </button>
      </div>
    );
  }
}

export default Hijo;
