import React from 'react';

class MyLabel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        <b>Has dado {this.props.text} clicks</b>
      </p>
    );
  }
}

export default MyLabel;
