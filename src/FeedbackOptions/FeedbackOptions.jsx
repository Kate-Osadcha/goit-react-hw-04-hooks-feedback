import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(btnName => {
        return (
          <li className={s.item} key={btnName}>
            <button
              className={s.button}
              type="button"
              onClick={() => {
                onLeaveFeedback(btnName);
              }}
            >
              {btnName}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
