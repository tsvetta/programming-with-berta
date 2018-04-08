import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

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

ReactDOM.render(
  <Router>
    <Layout>
      <div className={styles.layoutContent}>
        <Navigation
          routes={[
            {
              to: paths.home,
              text: 'woof!',
            },
          ]}
        />
        <main>
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </main>
      </div>
    </Layout>
  </Router>,
  document.getElementById('app')
);
