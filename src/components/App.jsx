import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import 'modern-normalize/modern-normalize.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = text => {
    this.setState(prevState => ({
      [text]: prevState[text] + 1,
    }));
  };

  // countFeedback = (text) => {
  //   this.setState(prevState => {
  //     prevState[text] += 1;
  //     // console.log(prevState);
  //   });
  // }

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const percent = Math.floor((good / total) * 100);
    return (
      <div style={{ height: '100vh', fontSize: 32, color: '#010101' }}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
