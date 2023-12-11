import React from 'react';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(item => (
        <div key={item} className={s.box}>
          <button
            type="button"
            name={item}
            onClick={onLeaveFeedback}
            className={s.button}
          >
            {item}
          </button>
        </div>
      ))}
    </>
  );
};
