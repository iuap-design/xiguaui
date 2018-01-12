import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BeeButton from 'bee-button';

class Button extends React.Component {
  render() {
    return(<BeeButton isSubmit={true}>Default</BeeButton>)
  }
}
export default Button;
