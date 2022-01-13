import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHome from './AppHome';
import AppLaunch from './AppLaunch';
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AppHome/>} />
        <Route path="/launchapp" element={<AppLaunch/>} />
      </Routes>
      
    </div>
  );
}

export default App;
