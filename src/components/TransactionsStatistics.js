import React from 'react';
import "./transactionsStatistics.css"

const TransactionsStatistics = ({ statistics }) => {
    if (!statistics) return null;
    return (
        <div className="statisticsContainer">
            <h3>Statistics</h3>
            <p>Total Sale Amount: ${statistics.totalSaleAmount}</p>
            <p>Total Sold Items: {statistics.totalSoldItems}</p>
            <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
        </div>
    );
};

export default TransactionsStatistics;
