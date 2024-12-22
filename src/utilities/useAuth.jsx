// import { useState, useEffect } from 'react';
// import { fetchAuthSession } from 'aws-amplify/auth';

// const useAuth = () => {
//     const [token, setToken] = useState<any>(null);
//     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

//     useEffect(() => {
//         const fetchToken = async () => {
//             try {
//                 const session = await fetchAuthSession();
//                 const jwtToken = session.tokens?.accessToken;
//                 if (jwtToken) {
//                     setToken(jwtToken);
//                     setIsAuthenticated(true);
//                 }

//             } catch (error) {
//                 console.error('Error fetching token:', error);
//                 setIsAuthenticated(false);
//             }
//         };

//         fetchToken();
//     }, []);

//     return { token, isAuthenticated };
// };

// export default useAuth;
