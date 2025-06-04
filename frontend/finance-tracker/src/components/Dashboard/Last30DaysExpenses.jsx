import React, { useState, useEffect } from "react";
import CustomBarChart from "../Charts/CustomBarChart"; // Adjust path as needed
import { prepareExpenseBarChartData } from "../../utils/helper"; // Adjust path as needed

const Last30DaysExpenses = ({ data }) => {
 const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between mb-2">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>
      {<CustomBarChart data={chartData} /> }
    </div>
  );
};

export default Last30DaysExpenses;
