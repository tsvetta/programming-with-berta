import * as React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles.css';
// import classnames from 'classnames/bind';
// const cx = classnames.bind(styles);

class Layout extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <div className={styles.layout}>
        {props.children}
      </div>
    );
  }
}

export default Layout;
