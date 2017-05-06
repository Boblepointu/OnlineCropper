import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CheckboxMui from 'material-ui/Checkbox';
import styles from './../../styles/controls/Checkbox.css';

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.props = props;
    this.state.isChecked = true;
  };

  render() {
    return (
      <div className={styles.block}>
        <div className={styles.subBlock}>
          <MuiThemeProvider>
              <CheckboxMui
                className={styles.checkbox}
                onCheck={(this.state.props.onCheck) ? this.state.props.onCheck : () => {}}
                defaultChecked={this.state.props.defaultChecked}
                label={this.state.props.label}
                />
          </MuiThemeProvider>
        </div>
      </div>
    );
  };

}

export default Checkbox;
