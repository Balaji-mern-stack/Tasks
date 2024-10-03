import React, { useContext } from 'react';
import {Listcontext} from './UseReducerTask'
function UseReducerList() {
  const { state, deleteFromHistory } = useContext(Listcontext);
  
 // console.log(history);
 // let history=state.history
  

  const handleDelete = (index) => {
    deleteFromHistory(index);
  };

  return (
    <div>
      {/* <ul>
        {history && history.map((value, index) => (
          <li key={index}>
            Number: {value}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default UseReducerList;
