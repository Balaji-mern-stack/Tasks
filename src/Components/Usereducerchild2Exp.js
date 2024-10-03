import React, { useContext } from 'react';
import { countContext } from './UsereducerExp'; 
import { type } from '@testing-library/user-event/dist/type';

function Usereducerchild2Exp() {
  const {count, dispatch } = useContext(countContext);

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch({type:"DECREASE"})}}>Decrease</button>
    </div>
  );
}

export default Usereducerchild2Exp;
