import React, { useContext } from 'react';
import { Listcontext } from './UseReducerTask'; // Import Listcontext correctly

function ListTaskChild() {
  const { state, deleteFromHistory } = useContext(Listcontext);
  const history = state.history;
  

  const handleDelete = (index) => {
    deleteFromHistory(index);
  };

  return (
    <div>
      <ul>
        {history && history.map((value, index) => (
          <li key={index}>
            Number: {value}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTaskChild;
