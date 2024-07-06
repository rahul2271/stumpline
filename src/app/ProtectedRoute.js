// src/ProtectedRoute.js
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/adminlogin');
    }
  }, [user, router]);

  if (user === null) {
    return null; // or a loading spinner
  }

  return children;
};

export default ProtectedRoute;
