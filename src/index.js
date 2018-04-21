import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Provider from 'Redux/provider';
import { createStore } from 'Redux/store';
import { reducer } from 'Redux/reducers';

import HomePage from 'Pages/home-page';
import ErrorPage from 'Pages/error-page';

import Layout from 'Components/layout';
import Navigation from 'Components/navigation';

import styles from 'Root/common.css';

const paths = {
  home: '/',
};

export const routes = [
  {
    path: paths.home,
    component: HomePage,
    exact: true,
  },
  {
    component: ErrorPage,
  },
];

const appStore = createStore(reducer);

ReactDOM.render(
  <Provider store={appStore}>
    <Router basename='/programming-with-berta'>
      <Layout>
        <div className={styles.layoutContent}>
          {/* <Navigation
            routes={[
              {
                to: paths.home,
                text: 'woof!',
              },
            ]}
          /> */}
          <main className={styles.main}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} {...route} />
              ))}
            </Switch>
          </main>
        </div>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('app')
);
