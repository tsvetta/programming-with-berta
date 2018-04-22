import { reducer } from './reducers';
import { actionTypes } from './actions';

export const BertaDefaultStoreState = {
  skillsHidden: true,
  skills: {
    html: 0,
    css: 0,
    js: 0,
    react: 0,
    webpack: 0,
    algorithms: 0,
    patterns: 0,
  },
}

export const createStore = (reducer, middleware) => {
  let state;
  let listeners = [];

  const getState = () => {
    return state;
  }

  const dispatch = (action) => {
    state = reducer(state, action);

    listeners.forEach(listener => listener())
  }

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => { // removing the listener from listeners
      listeners = listeners.filter(l => l !== listener);
    }
  }

  // to return the initial value
  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  }
}
