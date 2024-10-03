import React, { useContext } from 'react';
import { countContext } from './UsereducerExp'; 
import Usereducerchild2Exp from './Usereducerchild2Exp';
import { type } from '@testing-library/user-event/dist/type';

function UsereducerchildExp() {
  const { count, dispatch } = useContext(countContext);

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch({type:"INCREASE"})}}>Increase</button>
      <Usereducerchild2Exp />
    </div>
  );
}

export default UsereducerchildExp;
