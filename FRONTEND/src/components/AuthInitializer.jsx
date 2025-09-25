import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../api/user.api';
import { login } from '../store/slice/authSlice';

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const response = await getCurrentUser();
        if (response && response.user) {
          dispatch(login(response.user));
        }
      } catch (error) {
        // User not authenticated, continue without login
        console.log('No authenticated user found on app initialization');
      }
    };

    initializeAuth();
  }, [dispatch]);

  return children;
};

export default AuthInitializer;