import React from 'react';

import Page from 'Pages/page';
import BertaSays from 'Components/berta-says';
import Button from 'UI/button';

import styles from './styles.css';

const DIALOG = [
  {
    Berta: "Hello, good sir! I'm Berta the Dog!",
    you: "What's up, Berta?",
  },
  {
    Berta: "I'm having troubles...",
    you: "What troubles, Berta?",
  },
  {
    Berta: "...troubles with programming!",
    you: "Tell me more!",
  },
  {
    Berta: "Later.",
    you: "Ok :(",
  },
];

class HomePage extends React.PureComponent {
  state = {
    counter: 0,
  }

  render() {
    return (
      <Page>
        <div className={styles.content}>
          <BertaSays phrase={DIALOG[this.state.counter].Berta} />
          <Button
            type='button'
            onClick={this.nextPhrase}
          >
            {DIALOG[this.state.counter].you}
          </Button>
        </div>
      </Page>
    );
  }

  nextPhrase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default HomePage;
