
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {depositAmount, withdrawAmount} from './stateBank/actionFunction/index'
import { useState } from 'react';

function App() {
  const amount= 500;
  const balance = useSelector((state) => state.balance);
  console.log(balance);
  const dispatch = useDispatch();
  return (
    <div className="App">
     
     <div class="quantity">
        <button class="quantity__minus" title="Decrement" onClick={() => dispatch(depositAmount(333))} ><span>Deposit</span></button>
        <input name="quantity" type="text" class="quantity__input" value={balance}/>
        <button class="quantity__plus" title="Increment" onClick={() => dispatch(withdrawAmount(amount))}><span>Withdraw</span></button>
      </div>
      <ul>
        <li>
        {balance}
        </li>
      </ul>
    
    </div>
  );
}

export default App;
