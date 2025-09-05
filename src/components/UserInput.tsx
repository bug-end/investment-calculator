import type { UserInputData } from '@/types/investment';

interface UserInputProps {
  userInput: UserInputData;
  onInputChange: (inputIdentifier: string, newValue: string) => void;
}

export const UserInput: React.FC<UserInputProps> = ({ userInput, onInputChange }) => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial Investment</label>
          <input
            type='number'
            id='initial-investment'
            value={userInput.initialInvestment}
            onChange={(event) => onInputChange('initialInvestment', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Annual Investment</label>
          <input
            type='number'
            id='yearly-contribution'
            value={userInput.annualInvestment}
            onChange={(event) => onInputChange('annualInvestment', event.target.value)}
          />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected Return</label>
          <input
            type='number'
            id='expected-return'
            value={userInput.expectedReturn}
            onChange={(event) => onInputChange('expectedReturn', event.target.value)}
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
            id='duration'
            min={1}
            value={userInput.duration}
            onChange={(event) => onInputChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
