import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class Button extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <button
        type={props.type}
        className={styles.button}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  onClick: () => { },
}

export default Button;
