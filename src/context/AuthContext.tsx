'use client'

import { createContext, useContext, useState } from 'react';

interface User {
  id?: string,
  name: string,
  email: string
};

interface AuthContextInterface {
  user: User | null,
  login: (user: User) => void,
  logout: () => void
};

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // verificar se já existe usuario logado (useEffect talvez)

  const login = (user: User) => setUser(user);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{ user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAtuth must be used within AuthProvider');
  }
  return context;
};
