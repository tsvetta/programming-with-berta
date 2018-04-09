import * as React from 'react';
import PropTypes from 'prop-types';
import connect from 'Redux/connect';
import styles from './styles.css';

class Page extends React.PureComponent {
  render() {
    const { props } = this;

    return (
      <section className={styles.page}>
        {props.children}
      </section>
    );
  }
}

Page.propTypes = {
  skills: PropTypes.object,
}

const mapStateToProps = (state) => {
  const { skills } = state;

  return {
    skills,
  };
}

export default connect(mapStateToProps)(Page);
