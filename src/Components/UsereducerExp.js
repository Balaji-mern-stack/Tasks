import React, { createContext, useReducer } from 'react';
import UsereducerchildExp from './UsereducerchildExp';

export const countContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function UsereducerExp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  return (
    <countContext.Provider value={{ count: state.count, dispatch }}>
      <div>
        <UsereducerchildExp />
      </div>
    </countContext.Provider>
  );
}

export default UsereducerExp;
