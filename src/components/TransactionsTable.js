import React from 'react';
import './transactionTable.css';

const TransactionsTable = ({ transactions, page, setPage }) => {
    const truncateDescription = (description, maxWords) => {
        const words = description.split(' ');
        return words.length > maxWords
            ? words.slice(0, maxWords).join(' ') + '...'
            : description;
    };

    return (
        <div className="tableContainer">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                        {/* <th>Date of Sale</th> */}
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>
                                <img
                                    src={transaction.image} 
                                    alt={transaction.title}
                                    className="productImage"
                                />
                            </td>
                            <td>{transaction.title}</td>
                            <td>{truncateDescription(transaction.description, 10)}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                            {/* <td>{transactions.dateOfSale}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="buttonContainer">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default TransactionsTable;
