import React from 'react';
import { Link } from '@tanstack/react-router';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
  };

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        🔗 URL Shortener & QR Code Generator
      </Link>

      <div className="space-x-4">
        {!isAuthenticated ? (
          <>
            <Link
              to="/auth?mode=login"
              className="text-blue-600 hover:text-blue-800 font-medium transition"
            >
              Login
            </Link>
            <Link
              to="/auth?mode=register"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </>
        ) : (
          <>
            <span className="text-gray-600">Hi, {user?.name || 'User'}</span>
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
