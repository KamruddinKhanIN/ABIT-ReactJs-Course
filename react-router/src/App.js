import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>  <NavLink to="/">Home Page</NavLink>   </li>
          <li><NavLink to="/about-me">About Page</NavLink></li>
          <li><NavLink to="/contact-me">Contacts Page</NavLink></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about-me' element={<AboutPage/>}/>
        <Route path='/contact-me' element={<ContactPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
