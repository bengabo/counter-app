import React, { useState } from 'react';
import './Counter.css';

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <label >Choose your number then enter</label>
      <div>
        <input type="text" onKeyPress={(event) => {if (event.key === 'Enter') { setCount(Number(event.target.value)) }}} />
      </div>
      <label>Le compteur est à {count}</label>
      <div className="buttons">
        <div>
          <button onClick={() => setCount(count - 1)}>
            -1
          </button>
        </div>
        <div>
          <button onClick={() => setCount(count + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;