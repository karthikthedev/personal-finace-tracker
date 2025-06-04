
import React, { useEffect, useState } from "react";
import AddExpenseForm from "./ExpenseList";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper"; // Adjust the import path as necessary
import AddIncomeForm from "../Income/AddIncomeForm";
const ExpenseOverview = ({ transactions, onAddExpense }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const result = prepareExpenseLineChartData(transactions);
        // const result = prepareExpenseLineChartData(transactions);
  console.log("Chart Data:", result); 
        setChartData(result);

        return () => {
            // Cleanup function if needed
        };
    }, [transactions]);

    return (
       
    <div className="card">
        <div className="flex items-center justify-between">
            <div className="">
                <h5 className="text-lg">Expense Overview</h5>
                <p className="text-xs text-gray-400 mt-0.5">
                    Track your spending trends over time and gain insights where your money goes.
                </p>
            </div>

            <button className="add-btn" onClick={onAddExpense}>
                <LuPlus className="text-lg" />
                Add Expense
            </button>
        </div>

        <div className="mt-10">
      
          <CustomLineChart data={chartData} />
            {/* Chart or other content would go here */}
        </div>
    </div>

    );
};

export default ExpenseOverview;

