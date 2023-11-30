import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Home from '../components/Pages/Home';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};
export default Layout;
