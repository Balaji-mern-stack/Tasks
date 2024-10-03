import React, { createContext, useReducer } from 'react';
import ListTaskChild from './ListTaskChild'; // Import ListTaskChild correctly

// Create context
export const Listcontext = createContext();

// Define initial state


// Define reducer
function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        history: [...state.history, state.num],
        num: state.num + 1
      };
    case 'SET_NUM':
      return {
        ...state,
        num: action.payload
      };
    case 'DELETE_FROM_HISTORY':
      return {
        ...state,
        history: state.history.filter((_, i) => i !== action.payload)
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// Define the provider component
function UseReducerTask() {
  const [state, dispatch] = useReducer(reducer, {
    num: 0,
    history: []
  });

  const increase = () => dispatch({ type: 'INCREASE' });
  const handleInputChange = (e) => dispatch({ type: 'SET_NUM', payload: Number(e.target.value) });
  const deleteFromHistory = (index) => dispatch({ type: 'DELETE_FROM_HISTORY', payload: index });

  return (
    <Listcontext.Provider value={{ state, increase, deleteFromHistory }}>
      <div>
        <input
          type='number'
          value={state.num}
          placeholder='Enter the number'
          onChange={handleInputChange}
        />
        <br />
        <button onClick={increase}>Add</button>
      </div>
       {/* Ensure ListTaskChild is correctly imported */}
    </Listcontext.Provider>
  );
}

export default UseReducerTask;
