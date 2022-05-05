
// import Videoplay from "./component/vid12.mp4";
import './App.css';
// import { Route } from 'react-router-dom';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';
import Academic from "./component/Academic";
import Codingsourse from "./component/Codingsourse";
import Clubs from './component/Clubs';
import Studymatrial from "./component/Studymatrial";

function App() {
  return (
    <div>
    {/* <Route path = "/" component={ Loginpage } exact/>
    <Route path = "/academic" component={ Academic } />
    <Route path = "/club" component={ Clubs } />
    <Route path = "/studymaterial" component={ Studymatrial } />
    <Route path = "/codingsourse" component={ Codingsourse } /> */}
    <Router>
    <Switch>
      <Route exact path='/academic' component={Academic}/>
      <Route exact path='/clubs' component={Clubs}/>
      <Route exact path='/codingsource' component={Codingsourse}/>
      <Route exact path='/studymatrial' component={Studymatrial}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
