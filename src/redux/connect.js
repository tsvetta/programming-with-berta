import React from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';

const noop = () => { };

export const bindActionCreators = (dispatch, actionCreators) => {
  const bindActionCreator = (actionCreator) => {
    return (...args) => dispatch(actionCreator(...args))
  };

  return R.map(bindActionCreator, actionCreators)
}

const connect = (mapStateToProps = noop, mapDispatchToProps = noop) => {
  return (Component) => {
    class ConnectedComponent extends React.PureComponent {
      componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(this.handleChange)
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        const { store } = this.context;
        const actionProps = typeof mapDispatchToProps === 'function'
          ? mapDispatchToProps(store.dispatch, this.props)
          : bindActionCreators(store.dispatch, mapDispatchToProps);

        return (
          <Component
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...actionProps}
          />
        );
      }

      handleChange = () => {
        this.forceUpdate()
      }
    }

    ConnectedComponent.contextTypes = {
      store: PropTypes.object,
    }

    ConnectedComponent.displayName = `Connected(${Component.displayName || Component.name})`;

    return ConnectedComponent;
  };
}

export default connect;
