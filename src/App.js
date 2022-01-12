import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./component/navbar/Navbar"
import Menu from "./component/menu/Menu";
import MenuDown from './component/MenuDown/MenuDown';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
      <MenuDown/>
      <Footer/>
    </div>
  );
}

export default App;
