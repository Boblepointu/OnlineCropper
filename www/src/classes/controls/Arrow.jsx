import React from 'react';

import FontAwesome from 'react-fontawesome';

import styles from './../../styles/controls/Arrow.css';

class Arrow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      orientation: props.orientation
    };
  };
  _onClick(e){
    (this.state.props.onClick) ? this.state.props.onClick(e) : () => {};
  }
  render() {
    var style = {float: "left"};
    if(this.state.orientation == 'right') style.float = "right";

    return (
      <div style={this.state.props.style} className={styles.block}>
        <div className={styles.subBlock}>
          <FontAwesome style={style} className={styles.arrow} onClick={this._onClick.bind(this)} name={`arrow-${this.state.orientation}`} />
        </div>
        <div className={styles.imageCropCanvas}></div>
      </div>
    );
  };

}

export default Arrow;
