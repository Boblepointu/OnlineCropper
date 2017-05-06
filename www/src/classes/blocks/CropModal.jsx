import React from 'react';
import _ from 'underscore';

import ReactCrop from 'react-image-crop';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import Arrow from './../controls/Arrow.jsx';
import styles from './../../styles/blocks/CropModal.css';

class CropModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
    this.state = {
      props: props,
      fileToCrop: props.fileToCrop,
      inputX: (this.state.props.cropObject) ? this.state.props.cropObject.x : 10,
      inputY: (this.state.props.cropObject) ? this.state.props.cropObject.y : 10,
      inputWidth: (this.state.props.cropObject) ? this.state.props.cropObject.width : 80,
      inputHeight: (this.state.props.cropObject) ? this.state.props.cropObject.height : 80
    };
  };

  _onCropperChange(e){
    this.state.inputX = e.x;
    this.state.inputY = e.y;
    this.state.inputWidth = e.width;
    this.state.inputHeight = e.height;
    this.setState(this.state);
    this.forceUpdate();
  };

  _onNextPreview(){
    var self = this;
    (this.state.props.onNextAsked) ? this.state.props.onNextAsked(
      this.state.fileToCrop
      , {
          x: self.state.inputX
          ,y: self.state.inputY
          ,width: self.state.inputWidth
          ,height: self.state.inputHeight
        }
      , (fileToCrop, cropObject) => {
        self.state.inputX = (cropObject) ? cropObject.x : 10;
        self.state.inputY = (cropObject) ? cropObject.y : 10;
        self.state.inputWidth = (cropObject) ? cropObject.width : 80;
        self.state.inputHeight = (cropObject) ? cropObject.height : 80;
        self.state.fileToCrop = fileToCrop;
        self.setState(self.state);
        self.forceUpdate();
      }) : () => {};
  };

  _onPreviousPreview(){
    var self = this;
    (this.state.props.onPreviousAsked) ? this.state.props.onPreviousAsked(
      this.state.fileToCrop
    , {
        x: self.state.inputX
        ,y: self.state.inputY
        ,width: self.state.inputWidth
        ,height: self.state.inputHeight
      }
    , (fileToCrop, cropObject) => {
      self.state.inputX = (cropObject) ? cropObject.x : 10;
      self.state.inputY = (cropObject) ? cropObject.y : 10;
      self.state.inputWidth = (cropObject) ? cropObject.width : 80;
      self.state.inputHeight = (cropObject) ? cropObject.height : 80;
      self.state.fileToCrop = fileToCrop;
      self.setState(self.state);
      self.forceUpdate();
    }) : () => {};
  };

  _onApply(){
    var self = this;
    (this.state.props.onApply) ? this.state.props.onApply(
      this.state.fileToCrop
    , {
        x: self.state.inputX
        ,y: self.state.inputY
        ,width: self.state.inputWidth
        ,height: self.state.inputHeight
      }) : () => {};
  };

  render() {
    var crop = {x: this.state.inputX, y: this.state.inputY, width: this.state.inputWidth, height: this.state.inputHeight};
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <div className={styles.arrowLeftContainer}>
            <Arrow orientation="left" onClick={this._onPreviousPreview.bind(this)} />
          </div>
          <div className={styles.imageContainer}>
            <ReactCrop crop={crop} onChange={this._onCropperChange.bind(this)} src={this.state.fileToCrop.preview} />
          </div>
          <div className={styles.arrowRightContainer}>
            <Arrow orientation="right" onClick={this._onNextPreview.bind(this)} />
          </div>
          <div className={styles.metaContainer}>
            <p><b>Name</b> : {(this.state.fileToCrop) ? this.state.fileToCrop.name : ''} - <b>Size</b> : {(this.state.fileToCrop) ? `${(this.state.fileToCrop.size/1024).toFixed(2)} kB` : ''}</p>
            <p><b>Type</b> : {(this.state.fileToCrop) ? this.state.fileToCrop.type : ''}</p>
          </div>
          <div className={styles.inputs}>
            <TextField
              hintText=''
              floatingLabelText="X : "
              floatingLabelFixed={true}
              underlineShow={true}
              className={styles.input}
              value={`${this.state.inputX.toFixed(2)} %`}
            />
            <TextField
              hintText=''
              floatingLabelText="Y : "
              floatingLabelFixed={true}
              underlineShow={true}
              className={styles.input}
              value={`${this.state.inputY.toFixed(2)} %`}
            />
            <TextField
              hintText=''
              floatingLabelText="Width : "
              floatingLabelFixed={true}
              underlineShow={true}
              className={styles.input}
              value={`${this.state.inputWidth.toFixed(2)} %`}
            />
            <TextField
              hintText=''
              floatingLabelText="Height : "
              floatingLabelFixed={true}
              underlineShow={true}
              className={styles.input}
              value={`${this.state.inputHeight.toFixed(2)} %`}
            />
          </div>
          <FlatButton label="Apply" primary={true} onClick={this._onApply.bind(this)} />
        </div>
      </div>
    );
  };

}

export default CropModal;
