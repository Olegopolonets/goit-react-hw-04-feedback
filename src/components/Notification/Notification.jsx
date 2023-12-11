import s from './Notification.module.css';

export const Notification = ({ message }) => (
  <h2 className={s.title}>{message}</h2>
);
