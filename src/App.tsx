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

  const handleInputChange = (inputIdentifier: string, newValue: number) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  console.log(userInput);

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInputChange} userInput={userInput} />
      <Results />
    </>
  );
}

export default App;
