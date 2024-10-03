import React, { useContext } from 'react';
import { datacontext } from './UseconextTask';

function UseconextTaskchild() {
  const { history, deleteFromHistory } = useContext(datacontext);

  const handleDelete = (index) => {
    deleteFromHistory(index);
  };

  return (
    <div>
      <ul>
        {history.map((value, index) => (
          <li key={index}>
            Number: {value}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseconextTaskchild;
