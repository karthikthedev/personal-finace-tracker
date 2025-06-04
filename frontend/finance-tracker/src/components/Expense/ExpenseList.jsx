import React from "react";
import { LuDownload } from "react-icons/lu";
import moment from "moment";
import TransactionInfoCard from "../Cards/TransactionInfoCard"; // Make sure this component exists and is correctly implemented

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="card p-4 rounded-lg shadow bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">All Expenses</h5>
        <button className="flex items-center gap-2 text-sm text-blue-600" onClick={onDownload}>
          <LuDownload className="text-base" />
          Download
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-3">
        {transactions && transactions.length > 0 ? (
          transactions.map((expense) => (
            <TransactionInfoCard
              key={expense._id}
              title={expense.category}
              icon={expense.icon}
              date={moment(expense.date).format("Do MMM YY")}
              amount={expense.amount}
              type="expense"
              onDelete={() => onDelete(expense._id)}
            />
          ))
        ) : (
          <p className="text-sm text-gray-500">No expenses to display.</p>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
