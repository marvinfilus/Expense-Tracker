import React, { useContext }from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transactions from './Transactions';

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext);

    console.log(transactions);

  return (
    <>
       <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map( transaction =>( <Transactions key={transaction.id} transaction={transaction} /> ))}
           
        </ul>
    </>
  )
}

export default TransactionList
