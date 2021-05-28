import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Contact from "../Contact/Contact";
import Navbar from "../SharedComponents/Navbar/Navbar";
import SignIn from "../SignIn/SignIn";
import Home from "../Home/Home";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
