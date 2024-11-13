
import './App.css';
import React, { useState, useEffect } from 'react';
import { fetchTransactions, fetchStatistics, fetchPriceRangeData } from './api';
import TransactionsTable from './components/TransactionsTable';
import TransactionsStatistics from './components/TransactionsStatistics';
import TransactionsBarChart from './components/TransactionsBarChart';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function App() {
  const [month, setMonth] = useState(3); // Default to March
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState(null);
  const [priceRangeData, setPriceRangeData] = useState(null);

  useEffect(() => {
      fetchTransactions(month, search, page).then((response) =>
          setTransactions(response.data)
      );
      fetchStatistics(month).then((response) => setStatistics(response.data));
      fetchPriceRangeData(month).then((response) =>
          setPriceRangeData(response.data)
      );
  }, [month, search, page]);

  const handleMonthChange = (e) => {
      setMonth(e.target.value);
      setPage(1); // Reset page to 1 on month change
  };

  return (
      <div className="dashboard">
          <header className="dashboard__header">
            <h1>Transaction Dashboard</h1>
          </header>
          <main className="dashboard__content">
            <section className="dashboard__controls">
              <div className="controls__filter">
                <label>
                  Select Month:
                  <select value={month} onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {new Date(0, i).toLocaleString('default', {
                          month: 'long',
                        })}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="controls__search">
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </section>

            <section className="dashboard__table">
              <TransactionsTable transactions={transactions} page={page} setPage={setPage} />
            </section>

            <section className="dashboard__charts">
              <TransactionsBarChart data={priceRangeData} />
            </section>
          </main>
      </div>
  );
}

export default App;
