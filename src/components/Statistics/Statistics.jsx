import s from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <>
      <div>
        <p className={s.text}>Good: {good}</p>
        <p className={s.text}>Neutral: {neutral}</p>
        <p className={s.text}>Bad: {bad}</p>
        <p className={s.text}>Total: {total}</p>
        <p className={s.text}>
          Positive feedback:
          {positive.toFixed()}%
        </p>
      </div>
    </>
  );
};
