import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.css';
// import classnames from 'classnames/bind';
// const cx = classnames.bind(styles);

class Navigation extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {props.routes.map(route => (
            <li key={route.to} className={styles.item}>
              <Link to={route.to}>
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired
  ),
};


export default Navigation;
