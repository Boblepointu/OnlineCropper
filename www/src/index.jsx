import React from 'react';
import {render} from 'react-dom';
import ImageGrab from './classes/blocks/ImageGrab.jsx';

class App extends React.Component {
  render () {
    return <ImageGrab />;
  }
}

render(<App/>, document.getElementById('app'));
