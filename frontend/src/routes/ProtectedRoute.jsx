import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // If not authenticated → redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated → allow access
  return children;
}

export default ProtectedRoute;
