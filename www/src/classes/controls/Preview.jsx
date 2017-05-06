import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import DeleteButton from './../controls/DeleteButton.jsx'
import deleteImg from './../../images/Preview_delete.svg';

import styles from './../../styles/controls/Preview.css';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCropped: props.isCropped,
      isSent: props.isSent,
      isUploading: props.isUploading,
      croppedImage: props.croppedImage
    };
    this.state.props = props;
  };
  componentWillReceiveProps(props) {
    this.state.isCropped = props.isCropped;
    this.state.isSent = props.isSent;
    this.state.isUploading = props.isUploading;
    this.state.croppedImage = props.croppedImage;
    this.state.isDownloadadble = props.isDownloadadble;
    this.setState(this.state);
  };
  _onClick(){
    if(this.state.croppedImage){
      var filename = 'test.png';
      var tempLink = document.createElement('a');
      tempLink.href = this.state.croppedImage.props.src;
      tempLink.setAttribute('download', `cropped_${this.props.title}`);
      tempLink.setAttribute('target', '_blank');
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }else{
        (this.state.props.onClick) ? this.state.props.onClick(this.state.props.fullObject) : () => {};
    }
  }
  _onDelete(){ (this.state.props.onDelete) ? this.state.props.onDelete(this.state.props.fullObject) : () => {}; };
  render() {
    var imageToDisplay = (<img src={this.props.src} className={styles.image} />);
    if(this.state.croppedImage) imageToDisplay = this.state.croppedImage;
    return (
      <div key={`${this.props.subtitle} - ${this.props.text}`} onClick={this._onClick.bind(this)} className={styles.block}>
        <div className={styles.subBlock}>
          <MuiThemeProvider>
            <Card>
              <CardMedia
                overlay={<CardTitle title={this.props.title} subtitle={`${this.props.subtitle} - ${this.props.text}`} />}
              >
                <div className={styles.imageContainer}>
                  {imageToDisplay}
                </div>

                <div className={styles.deleteButton} onClick={this._onDelete.bind(this)}>
                  <DeleteButton label="" onClick={this._onDelete.bind(this)} />
                </div>
                <div className={styles.croppedState}>
                  {(this.state.isCropped) ? <FontAwesome className={styles.croppedStateCore} name='check' color="green" /> : ''}
                </div>
                <div className={styles.sentState}>
                  {(this.state.isSent) ? <FontAwesome name='paper-plane' color="green" /> : ''}
                </div>
                <div className={styles.uploadState}>
                  {(this.state.isUploading) ? <FontAwesome name='spinner' /> : ''}
                </div>
                <div className={styles.downloadState}>
                  {(this.state.croppedImage) ? <FontAwesome name='download' /> : ''}
                </div>
              </CardMedia>
            </Card>
          </MuiThemeProvider>
        </div>
      </div>
    );
  };

}

export default Preview;
