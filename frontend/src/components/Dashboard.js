import React, { useEffect, useState } from 'react';
import api from '../api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('/api/transactions')  // Change if your route is different
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error('API error:', err));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t.description} - ₹{t.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
