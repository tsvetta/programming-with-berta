import React from 'react';

import Page from 'Pages/page';
import Dialog from 'Components/dialog';

class HomePage extends React.PureComponent {
  render() {
    return (
      <Page>
        <Dialog />
      </Page>
    );
  }
}

export default HomePage;
