import React from 'react';

import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = event => {
    event.target.name === 'good'
      ? this.setState(prevState => ({ good: prevState.good + 1 }))
      : event.target.name === 'neutral'
      ? this.setState(prevState => ({ neutral: prevState.neutral + 1 }))
      : this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (this.state.good / totalFeedback) * 100;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const countPositiveFeedbackPercentage =
      this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <div>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.addFeedback}
            />
          </div>
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positive={countPositiveFeedbackPercentage}
            />
          </Section>
        )}
      </>
    );
  }
}
