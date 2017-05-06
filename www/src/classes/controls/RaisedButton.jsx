import React from 'react';

import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButtonMui from 'material-ui/RaisedButton';
import styles from './../../styles/controls/RaisedButton.css';

class RaisedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
  };

  render() {
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <MuiThemeProvider>
              <RaisedButtonMui
                backgroundColor={blue500}
                className={styles.raisedButton}
                onClick={(this.state.props.onClick) ? this.state.props.onClick : () => {}}
                label={this.state.props.label}
                primary={this.state.props.primary}
                />
          </MuiThemeProvider>
        </div>
      </div>
    );
  };

}

export default RaisedButton;
