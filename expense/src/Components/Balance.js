import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0)
  .toFixed(2);

const expense = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
).toFixed(2);


  return (
    <>
      <h4> Your Balance </h4>
      <h1>{total} </h1>
    </>
  )
}

export default Balance
