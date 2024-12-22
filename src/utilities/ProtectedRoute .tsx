import { Navigate, Outlet } from 'react-router-dom';
import { ProtectedRouteProps } from '../interfaces/interface';


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated }) => {

    return isAuthenticated ? (
        <>
            <h1>Hello, this is inside all outlets!</h1>
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    );
};

export default ProtectedRoute;
