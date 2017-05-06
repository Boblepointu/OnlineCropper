import React from 'react';
import _ from 'underscore';
import Axios from 'axios';
import Async from 'async';

import AppBar from './AppBar.jsx';
import Checkbox from './../controls/Checkbox.jsx';
import DropZone from './../controls/DropZone.jsx';
import RaisedButton from './../controls/RaisedButton.jsx';
import Preview from './../controls/Preview.jsx';
import Dialog from './../controls/Dialog.jsx';

import styles from './../../styles/blocks/ImageGrab.css';

class ImageGrab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filesObjects : [],
      croppedList : {},
      sentList : {},
      uploadingList : {},
      errorList: {},
      croppedImageList: {},
      modalOpened : false
    };
  };

  _onDrop(acceptedFiles, rejectedFiles) {
      var filesObjects = this.state.filesObjects;
      _.each(acceptedFiles, element => { filesObjects.unshift(element); });

      this.state.filesObjects = filesObjects;
      this.state.modalOpened = false;
      this.setState(this.state);
  };

  _onUpload(event){
    var self = this;
    var toExec = [];

    _.each(this.state.filesObjects, (element) => {
      var cropObject = self.state.croppedList[element.preview];
      var isAlreadyDone = self.state.croppedImageList[element.preview];
      if(!cropObject) return;
      if(isAlreadyDone) return;
      toExec.push(asyncCb => {
        self.state.uploadingList[element.preview] = true;
        self.setState(self.state);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', element.preview, true);
        xhr.responseType = 'blob';
        xhr.onload = function(e) {
          if (this.status == 200) {
            var myBlob = this.response;
            var fd = new FormData();
            fd.append('cropObject', JSON.stringify(cropObject));
            fd.append('imageFile', myBlob);
            Axios({
              method: 'post',
              url: '/crop',
              data: fd
            }).then(function(axiosRes){
              try{
                self.state.uploadingList[element.preview] = false;
                if(axiosRes.data != "error !"){
                  self.state.sentList[element.preview] = true;
                  self.state.errorList[element.preview] = false;
                  self.state.croppedList[element.preview] = true;
                  self.state.croppedImageList[element.preview] = (<img src={axiosRes.data} style={{maxWidth: '100%', maxHeight:"220px", minHeight:"220px"}} />);
                  self.setState(self.state);
                  asyncCb();
                  return;
                }
                self.state.errorList[element.preview] = true;
                self.setState(self.state);
                asyncCb();
              }catch(e){console.log(e);}
            });
          }
        };
        xhr.send();
      });
    });
    Async.parallelLimit(toExec, 4, (err, res) => {
      self.state.uploadingList = {};
      self.setState(self.state);
      setTimeout(function(){
        self.setState(self.state);
        self.forceUpdate();
      }, 1000)
    });
  };

  _onPreviewDelete(file, arg1) {
    this.state.modalOpened = false;
    this.state.filesObjects = _.filter(this.state.filesObjects, (element) => { return (element.name != file.name);});
    this.setState(this.state);
  };

  _onPreviewClick(fullObject){
    this.state.modalOpened = true;
    this.state.modalCurrentObject = fullObject;
    this.setState(this.state);
  };

  _onModalClose(modalState){
    this.state.croppedList = modalState.croppedList;
    this.state.modalOpened = false;
    this.setState(this.state);
  };

  render() {
    var self = this;
    return (
      <div className={styles.container}>
        <AppBar />
        <center>
          <DropZone
            label="Drop files here"
            acceptedTypes="image/*"
            onDrop={this._onDrop.bind(this)}
          />
          <Checkbox
            label="Compute on server"
            defaultChecked={true}
            style={styles.checkbox}
            onCheck={(event, isChecked) => {console.log(isChecked);}}
          />
          <RaisedButton
            label="Crop files"
            primary={true}
            onClick={this._onUpload.bind(this)}
          />
          <div>
            {this.state.filesObjects.map(element => {
              var isCropped = false;
              var isSent = false;
              var isUploading = false;
              var croppedImage = null;
              if(self.state.croppedList[element.preview]) isCropped = true;
              if(self.state.sentList[element.preview]) isSent = true;
              if(self.state.uploadingList[element.preview] == true) isUploading = true;
              if(self.state.croppedImageList[element.preview]) croppedImage =  self.state.croppedImageList[element.preview];

              return <Preview
                key={element.preview}
                croppedImage={croppedImage}
                isCropped={isCropped}
                isSent={isSent}
                isUploading={isUploading}
                fullObject={element}
                src={element.preview}
                title={element.name}
                subtitle={`Type: ${element.type}`}
                text={`
                  Size: ${(element.size/1024).toFixed(2)} kB
                `}
                onClick={this._onPreviewClick.bind(this)}
                onDelete={this._onPreviewDelete.bind(this)}
              />
            })}
          </div>
        </center>
        <Dialog
            ref="dialog"
            modal={false}
            open={this.state.modalOpened}
            croppedList={this.state.croppedList}
            previewList={this.state.filesObjects}
            currentObject={this.state.modalCurrentObject}
            onClose={this._onModalClose.bind(this)}
        />
      </div>
    )
  };
}

export default ImageGrab;
