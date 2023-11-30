import React from 'react';

const Footer = () => {
  return (
    <div
      className="flex justify-start gap-5 items-center border-b
    border-gray-100 w-full px-44 py-2 h-[80px] bg-white mt-10"
    >
      <a href="http://" className=" cursor-pointer hover:text-blue-600">
        Login
      </a>
      <a href="http://" className=" cursor-pointer hover:text-blue-600">
        Sign Up
      </a>
      <a href="http://" className=" cursor-pointer hover:text-blue-600">
        Privacy Policy
      </a>
      <a href="http://" className=" cursor-pointer hover:text-blue-600">
        Disclaimer
      </a>
      <a href="http://" className=" cursor-pointer hover:text-blue-600">
        Terms & Conditions
      </a>
    </div>
  );
};

export default Footer;
