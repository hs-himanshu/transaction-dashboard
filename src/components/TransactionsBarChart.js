import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./transactionsBarChart.css";

const TransactionsBarChart = ({ data }) => {
    if (!data) return null;

    const labels = data.map((item) => item.range);
    const values = data.map((item) => item.itemCount);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Items in Price Range',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div className="barChartContainer">
            <h3>Price Range Chart</h3>
            <Bar data={chartData} />
        </div>
    );
};

export default TransactionsBarChart;
