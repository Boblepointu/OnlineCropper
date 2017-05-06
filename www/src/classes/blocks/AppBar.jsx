import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarMui from 'material-ui/AppBar';
import styles from './../../styles/blocks/AppBar.css';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
  };

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBarMui title="Crop image files" />
          </div>
        </MuiThemeProvider>
      </div>
    );
  };

}

export default AppBar;
