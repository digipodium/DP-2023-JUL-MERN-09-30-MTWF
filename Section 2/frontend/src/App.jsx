import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>

        {/* <Link to="/home">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link> */}

        <Navbar />

        <Routes>
          <Route element={ <Home /> } path='/' />
          <Route element={ <Home /> } path='home' />
          <Route element={ <Signup /> } path='signup' />
          <Route element={ <Login /> } path='login' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;