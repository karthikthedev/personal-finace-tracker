// // require("dotenv").config();
// // const express = require("express");
// // const cors = require("cors");
// // const path = require("path");
// // const connectDB = require("./config/db");
// // const authRoutes = require("./routes/authRoutes");
// // const app = express();
// // const incomeRoutes =require ("./routes/incomeRoutes");
// // const expenseRoutes =require ("./routes/expenseRoutes");
// // const dashboardRoutes = require("./routes/dashboardRoutes");
// // // Middleware to handle CORS
// // app.use(
// //   cors({
// //     origin: process.env.CLIENT_URL || "*",
// //     methods: ["GET", "POST", "PUT", "DELETE"],
// //     allowedHeaders: ["Content-Type", "Authorization"],
// //   })
// // );

// // app.use(express.json());
// //  app.use(express.urlencoded({ extended: true }));
// // connectDB();
// // app.use("/api/v1/auth",authRoutes)
// // app.use("/api/v1/income",incomeRoutes);
// // app.use("/api/v1/expense", expenseRoutes);
// // app.use("/api/v1/dashboard", dashboardRoutes);

// // app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // const PORT = process.env.PORT || 5000; 

// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");
// const incomeRoutes = require("./routes/incomeRoutes");
// const expenseRoutes = require("./routes/expenseRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");

// const app = express();

// // ✅ Connect to database
// connectDB();

// // ✅ CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // ✅ Serve uploaded images
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ✅ Register routes (multer will handle form-data inside these)
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/income", incomeRoutes);
// app.use("/api/v1/expense", expenseRoutes);
// app.use("/api/v1/dashboard", dashboardRoutes);

// // ❗ Place body-parsers *after* routes that depend on multer
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

// ✅ Connect to database
connectDB();

// ✅ Middleware: Parse incoming request bodies BEFORE routes
app.use(express.json()); // For JSON bodies
app.use(express.urlencoded({ extended: true })); // For URL-encoded bodies

// ✅ CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Serve uploaded images statically

// ✅ Register routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
 
// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
