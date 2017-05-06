import React from 'react';

import styles from './../../styles/controls/Canvas.css';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
    this.state.isChecked = true;
  };
  dragStart(e){
    console.log(e)
  }
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <div draggable='true' onDragStart={this.dragStart} className={styles.topLeft}></div>
          <div className={styles.topRight}></div>
          <div className={styles.bottomLeft}></div>
          <div className={styles.bottomRight}></div>
        </div>
        <div className={styles.imageCropCanvas}></div>
      </div>
    );
  };

}

export default Canvas;
