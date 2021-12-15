import PropTypes from 'prop-types';
import s from '../Notification/Notification.module.scss';

const Notification = ({ message }) => <p className={s.message}>{message}</p>;

Notification.defaultProps = {
  message: '',
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
