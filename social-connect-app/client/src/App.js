import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
// // import Login from './components/Pages/Login';
// import Layout from './layouts/layout';
// import Home from './components/Pages/Home';
// import Login from './components/Pages/Login';
// import SignUp from './components/Pages/SignUp';
import Router from './routes';

function App() {
  const userData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData, 'from localstorage');
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
