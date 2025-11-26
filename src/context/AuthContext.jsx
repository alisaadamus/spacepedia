import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

import {
  get,
  ref,
  set
} from 'firebase/database';

import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth має використовуватися всередині AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = ref(db, `users/${firebaseUser.uid}`);
        const snapshot = await get(userRef);
        const data = snapshot.exists() ? snapshot.val() : {};

        setCurrentUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          login: data.login || null
        });
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const clearMessages = () => {
    setError('');
    setSuccess('');
  };

  const login = async ({ email, password }) => {
    try {
      setIsLoading(true);
      clearMessages();

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userRef = ref(db, `users/${user.uid}`);
      const snapshot = await get(userRef);
      const data = snapshot.exists() ? snapshot.val() : {};

      setCurrentUser({
        uid: user.uid,
        email: user.email,
        login: data.login || null
      });

      setSuccess("Успішний вхід!");
      return user;

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({ email, password, login }) => {
    try {
      setIsLoading(true);
      clearMessages();

      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await set(ref(db, `users/${user.uid}`), {
        login,
        email
      });

      setCurrentUser({
        uid: user.uid,
        email: user.email,
        login
      });

      setSuccess("Успішна реєстрація!");
      return user;

    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    setSuccess('Вихід виконано успішно');
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isLoading,
      error,
      success,
      login,
      register,
      logout,
      isAuthenticated: !!currentUser,
      clearMessages
    }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};
