import "./component/loginpage.css";
// import Videoplay from "./component/vid12.mp4";
import './App.css';
import { Route } from 'react-router-dom';
 
import Loginpage from './component/Loginpage';
function App() {
  return (
    <div>

    <Route path = "/" component={ Loginpage } />

    </div>
  );
}

export default App;
