import React from 'react';
import PropTypes from 'prop-types';

const noop = () => { };

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

        return (
          <Component
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
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
