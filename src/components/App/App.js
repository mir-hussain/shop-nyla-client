import { useEffect } from "react";
// redux
import { connect } from "react-redux";
//react route dom
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

//authentication
import { auth, setUser } from "../SignIn/authManager";
import {
  authPrivateLoading,
  authUserSuccess,
} from "../../redux/actions/userActions";

//components
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Shop from "../Shop/Shop";
import About from "../About/About";
import SignIn from "../SignIn/SignIn";
import "./App.scss";

function App({ setLoggedInUser, setPrivateLoading }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedInUser(setUser(user));
        setPrivateLoading();
      } else {
        setPrivateLoading();
      }
    });
    return unsubscribe;
  }, [setLoggedInUser, setPrivateLoading]);

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
          <Route path='/about'>
            <About />
          </Route>
          <PrivateRoute path='/about'>
            <Contact />
          </PrivateRoute>
          <PrivateRoute path='/contact'>
            <Contact />
          </PrivateRoute>
          <PrivateRoute path='/shop'>
            <Shop />
          </PrivateRoute>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: (user) =>
      dispatch(authUserSuccess(user)),
    setPrivateLoading: () => dispatch(authPrivateLoading()),
  };
};

export default connect(null, mapDispatchToProps)(App);
