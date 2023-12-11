import React, { useState } from 'react';

import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = event => {
    event.target.name === 'good'
      ? setGood(prevState => prevState + 1)
      : event.target.name === 'neutral'
      ? setNeutral(prevState => prevState + 1)
      : setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <div>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedback}
          />
        </div>
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </>
  );
};
