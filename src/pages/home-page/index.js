import * as React from 'react';

import Page from 'Pages/page';

import BertaHead from 'Berta/BERTA.png'

class HomePage extends React.PureComponent {
  render() {
    return (
      <Page>
        Hi! I'm Berta the Dog!
        <img src={BertaHead} />
      </Page>
    );
  }
}

export default HomePage;
