
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  id: string;
  email: string;
  nama: string;
  role: 'pasien' | 'perawat' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo users untuk testing
const demoUsers = {
  'pasien@test.com': { id: '1', email: 'pasien@test.com', nama: 'Budi Santoso', role: 'pasien' as const, password: 'password' },
  'perawat@test.com': { id: '2', email: 'perawat@test.com', nama: 'Ns. Ratna Dewi', role: 'perawat' as const, password: 'password' },
  'admin@test.com': { id: '3', email: 'admin@test.com', nama: 'Admin Sistem', role: 'admin' as const, password: 'password' }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const demoUser = demoUsers[email as keyof typeof demoUsers];
      
      if (demoUser && demoUser.password === password && demoUser.role === role) {
        const userSession = {
          id: demoUser.id,
          email: demoUser.email,
          nama: demoUser.nama,
          role: demoUser.role
        };
        
        setUser(userSession);
        localStorage.setItem('user', JSON.stringify(userSession));
        
        // Navigate based on role
        if (role === 'pasien') {
          navigate('/pasien/dashboard');
        } else if (role === 'perawat') {
          navigate('/perawat/dashboard');
        } else if (role === 'admin') {
          navigate('/admin/dashboard');
        }
        
        toast.success(`Selamat datang, ${userSession.nama}!`);
        return true;
      } else {
        toast.error('Email, password, atau role tidak sesuai');
        return false;
      }
    } catch (error) {
      toast.error('Terjadi kesalahan saat login');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
    toast.success('Berhasil keluar dari sistem');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
