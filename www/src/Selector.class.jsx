import React from 'react';

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {left : 0, top: 0, right: 0, bottom: 0};
    this.onClick = this.onClick;
  }

  onClick () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
