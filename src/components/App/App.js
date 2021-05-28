import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../SharedComponents/Navbar/Navbar";
import SignIn from "../SignIn/SignIn";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
