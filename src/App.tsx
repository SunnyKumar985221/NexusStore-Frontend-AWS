import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import './assets/css/global.scss';

import { lazy, Suspense } from 'react';
import { fetchToken } from './redux/reducers/authReducers';
import Loading from './pages/Loading';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Dashboard = lazy(() => import('./pages/adminPages/Dashboard'));
const ProtectedRoute = lazy(() => import('./utilities/ProtectedRoute '));


const App: React.FC = () => {
  
  Amplify.configure(awsExports);
  const dispatch = useDispatch<AppDispatch>();
  const { isToken, loading, error } = useSelector((state: RootState) => state.authentication);

  useEffect(() => {
    dispatch(fetchToken());
  }, [dispatch]);

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error fetching user data. Please try again later.</div>;
  }

  // Show the routes once user token is fetched
  return (
    <Router>

      <Suspense fallback={<Loading />}>
        <Routes>

          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />

          {/* Protected routes */}
          {isToken && (
            <Route element={<ProtectedRoute isAuthenticated={isToken} />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
