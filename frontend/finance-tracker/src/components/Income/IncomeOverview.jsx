

// // import React, { useEffect, useState } from "react";
// // import { LuPlus } from "react-icons/lu";
// // import CustomBarChart from "../charts/CustomBarChart";
// // import { prepareIncomeBarChartData } from "../../utils/helper";

// // const IncomeOverview = ({ transactions, onAddIncome }) => {
// //   const [chartData, setChartData] = useState([]);

// //   useEffect(() => {
// //     const result = prepareIncomeBarChartData(transactions);
// //     setChartData(result);
// //   }, [transactions]);

// //   return (
// //     <div className="card">
// //       <div className="flex items-center justify-between mb-4">
// //         <div>
// //           <h5 className="text-lg">Income Overview</h5>
// //           <p className="text-xs text-gray-400 mt-0.5">
// //             Track your earnings over time and analyze your income.
// //           </p>
// //         </div>

// //         {onAddIncome && (
// //           <button className="add-btn" onClick={onAddIncome}>
// //             <LuPlus className="text-lg" />
// //             Add Income
// //           </button>
// //         )}
// //       </div>

// //       <div className="mt-10">
// //         <CustomBarChart data={chartData} />
// //       </div>
// //     </div>
// //   );
// // };

// // export default IncomeOverview;

// import React, { useEffect, useState } from "react";
// import { LuPlus } from "react-icons/lu";
// import CustomBarChart from "../charts/CustomBarChart";
// import { prepareIncomeBarChartDataWithDate} from "../../utils/helper";

// const IncomeOverview = ({ transactions, onAddIncome }) => {
//   const [chartData, setChartData] = useState([]);

//   useEffect(() => {
//     const result = prepareIncomeBarChartDataWithDate(transactions);
//     setChartData(result);
//   }, [transactions]);

//   return (
//     <div className="card">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <h5 className="text-lg">Income Overview</h5>
//           <p className="text-xs text-gray-400 mt-0.5">
//             Track your earnings over time and analyze your income.
//           </p>
//         </div>

//         {onAddIncome && (
//           <button className="add-btn" onClick={onAddIncome}>
//             <LuPlus className="text-lg" />
//             Add Income
//           </button>
//         )}
//       </div>

//       <div className="mt-10">
//         <CustomBarChart data={chartData} />
//       </div>
//     </div>
//   );
// };

// export default IncomeOverview;

import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarChartDataWithDate } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartDataWithDate(transactions);
    setChartData(result);
  }, [transactions]);

  return (
    <div className="card p-4 rounded-lg shadow bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h5 className="text-lg font-semibold">Income Overview</h5>
          <p className="text-xs text-gray-500">
            Track your earnings over time and analyze your income.
          </p>
        </div>

        {onAddIncome && (
          <button className="add-btn flex items-center gap-1" onClick={onAddIncome}>
            <LuPlus className="text-lg" />
            Add Income
          </button>
        )}
      </div>

      {/* Chart */}
      <div className="mt-10">
        <CustomBarChart data={chartData} xKey="date" /> {/* 🟢 Ensure your chart uses `date` as xKey */}
      </div>
    </div>
  );
};

export default IncomeOverview;
