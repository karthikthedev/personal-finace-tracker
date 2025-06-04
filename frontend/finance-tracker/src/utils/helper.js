import moment from 'moment';

// ✅ Validate email
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ✅ Get initials from a name
export const getInitials = (name) => {
  if (!name) return "";

  const words = name.trim().split(" ").filter(Boolean);
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0];
  }

  return initials.toUpperCase();
};

// ✅ Format numbers with thousands separator
export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart 
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};



// ✅ Prepare income data for Line Chart (🆕 Added)



// ✅ Shows date on x-axis (same as line chart)
// export const prepareIncomeBarChartData = (data = []) => {
//   const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

//   const chartData = sortedData.map((item) => ({
//     month: moment(item?.date).format('Do MMM'), // ✅ shows "1 Feb", "2 Feb", etc.
//     amount: item?.amount,
//     source: item?.source,
//   }));

//   return chartData;
// };
// ✅ helper.js


export const prepareIncomeBarChartDataWithDate = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  return sortedData.map((item) => ({
    date: moment(item?.date).format("Do MMM"), // <-- key must be 'date'
    amount: item?.amount,
    source: item?.source,
  }));
};



// ✅ Prepare expense data for Bar Chart
export const prepareExpenseBarChartData = (data = []) => {
  return data.map((item) => ({
    category: item?.category,
    amount: item?.amount,
  }));
};

// ✅ Prepare expense data for Line Chart
export const prepareExpenseLineChartData = (data = []) => {
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  return sortedData.map((item) => ({
    month: moment(item?.date).format('Do MMM'),
    amount: item?.amount,
    category: item?.category,
  }));
};
