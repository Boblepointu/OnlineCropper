import React from 'react';

import Dropzone from 'react-dropzone';
import backgroundImg from './../../images/ImageGrab_bg_logo.svg';
import styles from './../../styles/controls/DropZone.css';

class DropZone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
    this.state.style = {
      borderColor: "black"
    }
  };
  _onDragEnter() {
    this.state.style.borderColor = "green";
    this.setState(this.state);
    (this.state.props.onDragEnter) ? this.state.props.onDragEnter() : "";
  };
  _onDragLeave() {
    this.state.style.borderColor = "black";
    this.setState(this.state);
    (this.state.props.onDragLeave) ? this.state.props.onDragLeave() : "";
  };
  _onDropAccepted(){
    this.state.style.borderColor = "blue";
    this.setState(this.state);
    setTimeout(()=>{
      this.state.style.borderColor = "black";
      this.setState(this.state);
    }, 1000);
    (this.state.props.onDropRejected) ? this.state.props.onDropAccepted() : "";
  };
  _onDropRejected(){
    this.state.style.borderColor = "red";
    this.setState(this.state);
    setTimeout(()=>{
      this.state.style.borderColor = "black";
      this.setState(this.state);
    }, 1000);
    (this.state.props.onDropRejected) ? this.state.props.onDropRejected() : "";
  };
  _onDrop(acceptedFiles, rejectedFiles){ (this.state.props.onDrop) ? this.state.props.onDrop(acceptedFiles, rejectedFiles) : ""; };
  render() {
    return (
      <div className={styles.dropzoneContainer}>
        <Dropzone
          accept={this.state.props.acceptedTypes}
          style={this.state.style}
          className={styles.dropzone}
          onDrop={(this.props.onDrop) ? this.props.onDrop.bind(this) : () => {}}
          onDragEnter={this._onDragEnter.bind(this)}
          onDragLeave={this._onDragLeave.bind(this)}
          onDropAccepted={this._onDropAccepted.bind(this)}
          onDropRejected={this._onDropRejected.bind(this)}
          onDrop={this._onDrop.bind(this)}
        >
          <div>
            <div className={styles.dropzoneText}>{this.state.props.label}</div>
            <div className={styles.dropzoneBg} dangerouslySetInnerHTML={{__html: backgroundImg}} />
          </div>
        </Dropzone>
      </div>
    );
  };
}

export default DropZone;
