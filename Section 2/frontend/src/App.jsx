import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <h1 className='myclass'>My React App</h1>
      <input type="text" />
      <h2 style={{ color: 'green', fontSize: 30 }}>Using Inline CSS</h2>
      <Home />

      <Signup />

      <Login />
    </div>
  );
}

export default App;