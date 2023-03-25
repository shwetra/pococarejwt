import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import AllRoutes from './components/AllRoutes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Login/>
     <Signup/> */}
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
