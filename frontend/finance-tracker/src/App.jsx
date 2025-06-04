
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Income from './pages/Dashboard/Income';
import Expense from './pages/Dashboard/Expense';
import UserProvider from './context/UserContext';
import ProtectRoute from './components/ProtectRoute'; // import your ProtectedRoute
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            
            {/* Protected routes */}
            <Route
              path="/dashboard"
              exact
              element={
                <ProtectRoute>
                  <Home />
                </ProtectRoute>
              }
            />
            <Route
              path="/income"
              exact
              element={
                <ProtectRoute>
                  <Income />
                </ProtectRoute>
              }
            />
            <Route
              path="/expense"
              exact
              element={
                <ProtectRoute>
                  <Expense />
                </ProtectRoute>
              }
            />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: { fontSize: "13px" },
        }}
      />
    </UserProvider>
  );
};

export default App;

const Root = () => {
  // Check if token exists in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />;
};
