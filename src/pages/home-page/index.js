import * as React from 'react';

import Page from 'Pages/page';
import BertaSays from 'Components/berta-says';

import styles from './styles.css';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <div className={styles.content}>
          <BertaSays
            phrase="Hi! I'm Berta the Dog!"
          />
        </div>
      </Page>
    );
  }
}

export default HomePage;
