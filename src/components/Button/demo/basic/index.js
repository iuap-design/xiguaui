import React, { Component } from 'react';
import { render } from 'react-dom';
import Button from '../../index';

import './index.scss';

export default class BaseDemo extends Component {
  render() {
    return (
      <div className="button-div">

        <Button>Default</Button>

    </div> )
  }
}
let root = document.getElementById('app');

render(<BaseDemo />, root);