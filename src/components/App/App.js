import { useEffect } from "react";
import "./App.scss";

// redux
import { connect } from "react-redux";
import {
  authPrivateLoading,
  authUserSuccess,
} from "../../redux/actions/userActions";

//react route dom
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

//authentication
import { auth, setUser } from "../SignIn/authManager";

//components
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Shop from "../Shop/Shop";
import About from "../About/About";
import SignIn from "../SignIn/SignIn";

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
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
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
