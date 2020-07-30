import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, withdraw } from './actions/actions';

function App() {
  const [amount, setAmount] = useState(0);
  const balance = useSelector(state => state.myReducer.balance);
  const dispatch = useDispatch();

  function onDeposit() {
    if (amount < 0) {
      return;
    }
    dispatch(deposit(amount));
  }

  function onWithdraw() {
    if (amount < 0 || amount > balance) {
      return;
    }
    dispatch(withdraw(amount))
  }

  function handleAmounChange(evt) {
    setAmount(Number(evt.target.value));
  }

  return (
    <div className="App">
      <label>Balance: {balance}</label>
      <div style={{ marginTop: 15 }}>
        <input type="number" value={amount} onChange={handleAmounChange} />
      </div>
      <div style={{ marginTop: 10 }}>
        <button style={{ marginRight: 10 }} onClick={onDeposit}>
          Deposit
        </button>
        <button onClick={onWithdraw}>Withdraw</button>
      </div>
    </div>
  );
}

export default App;
