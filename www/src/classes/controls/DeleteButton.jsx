import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonMui from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';
import styles from './../../styles/controls/DeleteButton.css';
const iconStyles = {
  marginRight: 24,
};
class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
  };
  _onDelete(e){
    e.stopPropagation();
    (this.state.props.onClick) ? this.state.props.onClick() : () => {};
  };
  render() {
    //console.log(this.state.props.icon)
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <FontAwesome className={styles.deleteButton} onClick={this._onDelete.bind(this)} name='trash' />
        </div>
      </div>
    );
  };

}

export default DeleteButton;
