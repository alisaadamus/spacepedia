import { createContext, useContext, useEffect, useState } from 'react';
import { authService } from '../api/auth';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth має використовувати AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
    setIsLoading(false);
  }, []);

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      clearMessages();
      const result = await authService.login(credentials);
      setCurrentUser(result.user);
      setSuccess('Успішно!');
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setIsLoading(true);
      clearMessages();
      const result = await authService.register(userData);
      setCurrentUser(result.user);
      setSuccess('Успішно!');
      return result;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
    setSuccess('Успішно!');
    setError('');
  };

  const value = {
    currentUser,
    isLoading,
    error,
    success,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser,
    clearMessages
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
