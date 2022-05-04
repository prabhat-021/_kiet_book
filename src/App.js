
// import Videoplay from "./component/vid12.mp4";
import './App.css';
import { Route } from 'react-router-dom';
import Academic from "./component/Academic";
import Loginpage from './component/Loginpage';

function App() {
  return (
    <div>
    <Route path = "/" component={ Loginpage } exact/>
    <Route path = "/academic" component={ Academic } />
    </div>
  );
}

export default App;
