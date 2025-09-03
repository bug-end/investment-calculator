import { useState } from 'react';

interface UserInputData {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export const UserInput = () => {
  const [userInput, setUserInput] = useState<UserInputData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier: string, newValue: number) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial Investment</label>
          <input
            type='number'
            id='initial-investment'
            required
            value={userInput.initialInvestment}
            onChange={(event) => handleChange('initialInvestment', event.target.valueAsNumber)}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Annual Investment</label>
          <input
            type='number'
            id='yearly-contribution'
            required
            value={userInput.annualInvestment}
            onChange={(event) => handleChange('annualInvestment', event.target.valueAsNumber)}
          />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected Return</label>
          <input
            type='number'
            id='expected-return'
            required
            value={userInput.expectedReturn}
            onChange={(event) => handleChange('expectedReturn', event.target.valueAsNumber)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            id='duration'
            required
            value={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.valueAsNumber)}
          />
        </p>
      </div>
    </section>
  );
};
