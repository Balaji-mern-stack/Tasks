import React, { createContext, useState } from 'react';
import UseconextTaskchild from './UseconextTaskchild';

export const datacontext = createContext();

function UseconextTask() {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([]);

  const increase = () => {
    setHistory(prevHistory => [...prevHistory, num]);
    setNum(num + 1);
  };

  const handleInputChange = (e) => {
    setNum(Number(e.target.value));
  };

  const deleteFromHistory = (index) => {
    setHistory(prevHistory => prevHistory.filter((_,i) => i !== index));
  };

  return (
    <datacontext.Provider value={{ num, history, increase, deleteFromHistory }}>
      <div>
        <input
          type='number'
          value={num}
          placeholder='Enter the number'
          onChange={handleInputChange}
        />
        <br />
        <button onClick={increase}>Add</button>
        <UseconextTaskchild />
      </div>
    </datacontext.Provider>
  );
}

export default UseconextTask;
