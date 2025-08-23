export const UserInput = () => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initial-investment'>Initial Investment</label>
          <input type='number' id='initial-investment' required />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Annual Investment</label>
          <input type='number' id='yearly-contribution' required />
        </p>
      </div>

      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>Expected Return</label>
          <input type='number' id='expected-return' required />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input type='number' id='duration' required />
        </p>
      </div>
    </section>
  );
};
