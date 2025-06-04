import React, { useState, useEffect } from 'react';
import CustomPieChart from '../Charts/CustomPieChart'; // Make sure this import is present
const COLORS = ["#875CF5"]; // Assuming single color for total income

const RecentIncomeWithChart = ({ data, totalIncome }) => {
  const [chartData, setChartData] = useState([]);

  const prepareChartData = () => {
    const dataArr = data?.map((item) => ({
      name: item?.source,
      amount: item?.amount,
    }));

    setChartData(dataArr);
  };

  useEffect(() => {
    prepareChartData();
  }, [data]);

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-semibold">Last 60 Days Income</h5>
        <span className="text-sm text-gray-500">Total: ${totalIncome ?? 56000}</span>

      </div>

      <CustomPieChart
        data={chartData}
        label="Total Income"
        totalAmount={`₹ ${totalIncome || 56000}`}
        showTextAnchor={true}
        colors={COLORS}
      />
    </div>
  );
};

export default RecentIncomeWithChart;
