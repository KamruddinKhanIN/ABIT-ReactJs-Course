// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// // import Login from './components/Pages/Login';
// import Layout from './layouts/layout';
// import Home from './components/Pages/Home';
// import Login from './components/Pages/Login';
// import SignUp from './components/Pages/SignUp';

// const Router = () => {
//   const userData = JSON.parse(localStorage.getItem('userData'));
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {userData && userData?.token ? (
//             <Route index element={<Home />} />
//           ) : (
//             <Route index element={<Navigate to="/login" replace={true} />} />
//           )}
//         </Route>
//         <Route path="/login" element={<Layout />}>
//           {userData && userData?.token ? (
//             <Route index element={<Navigate to="/" replace={true} />} />
//           ) : (
//             <Route index element={<Login />} />
//           )}
//         </Route>

//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </>
//   );
// };

// export default Router;

import React from 'react';
import { Routes, Route, Navigate, useRoutes } from 'react-router-dom';
import Layout from './layouts/layout';
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';

const Router = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));

  const routes = useRoutes([
    {
      path: '/',
      element:
        userData && userData?.token ? <Layout /> : <Navigate to="/login" />,
    },
    {
      path: 'login',
      element: userData && userData?.token ? <Navigate to="/" /> : <Login />,
    },
    {
      path: 'signup',
      element: userData && userData?.token ? <Navigate to="/" /> : <SignUp />,
    },
  ]);

  return routes;
};

export default Router;
