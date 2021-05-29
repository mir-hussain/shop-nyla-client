import { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { authPrivateLoading, authUserSuccess } from "../../redux/actions/userActions";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Navbar from "../SharedComponents/Navbar/Navbar";
import { auth, setUser } from "../SignIn/authManager";
import SignIn from "../SignIn/SignIn";
import "./App.scss";

function App({setLoggedInUser, setPrivateLoading}) {

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLoggedInUser(setUser(user));
        setPrivateLoading()
      }
      else {
        setPrivateLoading()
      }
    })
    return unsubscribe;
  }, [setLoggedInUser, setPrivateLoading]);

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/about'>
            <Contact />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInUser: user => dispatch(authUserSuccess(user)),
    setPrivateLoading: () => dispatch(authPrivateLoading())
  }
}

export default connect(null, mapDispatchToProps)(App);
