import { useState } from 'react';

import { Header } from '@components/Header';
import { UserInput } from '@components/UserInput';
import { Results } from '@components/Results';

import type { UserInputData } from '@/types/investment';

function App() {
  const [userInput, setUserInput] = useState<UserInputData>({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (inputIdentifier: string, newValue: string) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  };

  const isValidInput = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      {isValidInput ? (
        <Results userInput={userInput} />
      ) : (
        <p className='center'>Invalid input. Please check your values.</p>
      )}
    </>
  );
}

export default App;
