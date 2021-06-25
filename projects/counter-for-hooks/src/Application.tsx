import { ChangeEvent, useState } from 'react';

const inc = (count: number) => count + 1;
const dec = (count: number) => count - 1;

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  }

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">0</p>
      <section className="controls">
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input id="set-to" type="number" value={count} onChange={ changeCount}/>
          <input type="submit" type="number" value={count} onChange={(event) => {
            setCount(+event.target.value);
          }} />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
