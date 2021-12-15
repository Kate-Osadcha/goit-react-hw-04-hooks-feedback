import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    const percent = Math.round((good / value) * 100);

    if (!percent) return 0;
    return percent;
  }

  const optionName = ['good', 'neutral', 'bad'];
  const value = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionName}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={value}
          positivePercentage={percent}
        />
      </Section>
    </>
  );
}
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

//   // суммируем значения отзывов в state
//   countTotalFeedback = () => {
//     const total = Object.keys(this.state).reduce(
//       (acc, value) => acc + this.state[value],
//       0,
//     );
//     return total;
//   };

//   // считаем процент хороших отзывов
//   countPositiveFeedbackPercentage = () => {
//     const percent = Math.round(
//       (this.state.good * 100) / this.countTotalFeedback(),
//     );
//     return percent;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
// return (
//   <>
//     <Section title="Please leave feedback">
//       <FeedbackOptions
//         options={this.state}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </Section>
//     <Section title="Statistics">
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={this.countTotalFeedback}
//         positivePercentage={this.countPositiveFeedbackPercentage}
//       />
//     </Section>
//   </>
// );
//   }
// }

// export default App;
