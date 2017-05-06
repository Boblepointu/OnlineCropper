import React from 'react';
import _ from 'underscore';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogMui from 'material-ui/Dialog';
import FlatButtonMui from 'material-ui/FlatButton';
import CropModal from './../blocks/CropModal.jsx';
import styles from './../../styles/controls/Dialog.css';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: props,
      open: props.open,
      previewList: props.previewList,
      croppedList: props.croppedList,
      currentObject: props.currentObject
    };
  };
  componentWillReceiveProps(nxtProps) {
    if (nxtProps.open !== this.state.props.open) {
      this.state.open = nxtProps.open;
      this.setState(this.state);
    }
    if (nxtProps.previewList !== this.state.props.previewList) {
      this.state.previewList = nxtProps.previewList;
      this.setState(this.state);
    }
    if (nxtProps.currentObject !== this.state.props.currentObject) {
      this.state.currentObject = nxtProps.currentObject;
      this.setState(this.state);
    }
    if (nxtProps.croppedList !== this.state.props.croppedList) {
      this.state.croppedList = nxtProps.croppedList;
      this.setState(this.state);
    }
  }
  _onClose(){
    this.state.open = false;
    (this.state.props.onClose) ? this.state.props.onClose(this.state) : () => {};
    this.setState(this.state);
  };
  _onNextAsked(currElem, cropObj, cb){
    var i = _.indexOf(this.state.previewList, currElem) + 1;
    var newElem = this.state.previewList[i];
    this.state.croppedList[currElem.preview] = cropObj;
    if(!newElem) return;
    this.state.currElem = newElem;
    this.setState(this.state);
    cb(newElem, (this.state.croppedList[newElem.preview]) ? this.state.croppedList[newElem.preview] : null);
  };
  _onPreviousAsked(currElem, cropObj, cb){
    var i = _.indexOf(this.state.previewList, currElem) - 1;
    var newElem = this.state.previewList[i];
    this.state.croppedList[currElem.preview] = cropObj;
    if(!newElem) return;
    this.state.currElem = newElem;
    this.setState(this.state);
    cb(newElem, (this.state.croppedList[newElem.preview]) ? this.state.croppedList[newElem.preview] : null);
  };
  _onApply(currElem, cropObj){
    var i = _.indexOf(this.state.previewList, currElem) - 1;
    this.state.croppedList[currElem.preview] = cropObj;
    this._onClose();
  };
  render() {
    var croppedObject = null;
    if(this.state.currentObject && this.state.croppedList[this.state.currentObject.preview]){
      croppedObject = this.state.croppedList[this.state.currentObject.preview];
    };
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <MuiThemeProvider>
              <DialogMui
                className={styles.dialogMui}
                modal={false}
                open={this.state.open}
                onRequestClose={this._onClose.bind(this)}
              >
              <CropModal
                fileToCrop={this.state.currentObject}
                cropObject={croppedObject}
                onNextAsked={this._onNextAsked.bind(this)}
                onPreviousAsked={this._onPreviousAsked.bind(this)}
                onApply={this._onApply.bind(this)}
              />
            </DialogMui>
          </MuiThemeProvider>
        </div>
      </div>
    );
  };

}

export default Dialog;
