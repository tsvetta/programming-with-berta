import React from 'react';
import PropTypes from 'prop-types';

import connect from 'Redux/connect';
import { showSkills } from 'Redux/actions'

import Button from 'UI/button';
import BertaSays from 'Components/berta-says';

import styles from './styles.css';

class Dialog extends React.PureComponent {
  state = {
    part: 'intro',
    counter: 0,
  }

  nextLine = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  nextPart = (part) => {
    this.setState({
      part: part.toLowerCase(),
      counter: 0,
    })
  }

  showStatsAndGo = (part) => {
    this.props.showSkills();
    this.nextPart(part);
  }

  dialog = {
    intro: [
      {
        Berta: "Hello, good sir! I'm Berta the Dog!",
        you: ["What's up, Berta?"],
      },
      {
        Berta: "I'm having troubles...",
        you: ["What troubles, Berta?"],
      },
      {
        Berta: "...troubles with programming!",
        you: ["Tell me more!"],
      },
      {
        Berta: "I want to create an awesome website for dogs, where we could chat with each other and post photos of our humans!",
        you: ["Ok. Then you should learn at least HTML, CSS and JavaScript"],
      },
      {
        Berta: "Where should we start?",
        you: ["HTML", "CSS", "JavaScript"],
        handlers: {
          onClick: this.showStatsAndGo,
        },
      },
    ],
    html: [
      {
        Berta: "What's HTML?",
        you: ["..."],
      },
    ],
    css: [
      {
        Berta: "What's CSS?",
        you: ["..."],
      },
    ],
    javascript: [
      {
        Berta: "What's JavaScript?",
        you: ["..."],
      },
    ],
  };

  render() {
    const { state } = this;

    const currentLines = this.dialog[state.part][state.counter];
    const BertaLine = currentLines.Berta;
    const yourLines = currentLines.you;

    return (
      <div className={styles.content}>
        <BertaSays phrase={BertaLine} />

        {this.renderYourLine(yourLines, currentLines.handlers)}
      </div>
    );
  }

  renderYourLine = (lines, handlers = {}) => {
    if (lines.length === 0) {
      return null;
    }

    return (
      <div className={styles.youLines}>
        {lines.map((line) => {
          const { onClick, ...otherHandlers } = handlers;
          const onClickHandler = onClick
            ? (() => onClick(line))
            : this.nextLine;

          return (
            <Button
              key={line}
              type='button'
              onClick={onClickHandler}
              {...otherHandlers}
            >
              {line}
            </Button>
          );
        })}
      </div>
    );
  }
}

Dialog.propTypes = {
  skills: PropTypes.object,
  skillsHidden: PropTypes.bool,
  showSkills: PropTypes.func,
}

const mapStateToProps = (state) => {
  const { skills, skillsHidden } = state;

  return {
    skills,
    skillsHidden,
  };
}

const mapDispatchToProps = {
  showSkills,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
