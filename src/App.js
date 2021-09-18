import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Appointment from './Components/Appointment/Appointment/Appointment';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Home/Login/Login';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
import Contact from './Components/Home/Contact/Contact';
import Blog from './Components/Home/Blog/Blog/Blog';
import Testimonial from './Components/Home/Testimonial/Testimonial/Testimonial';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import Patients from './Components/DashBoard/Patients/Patients';
import AboutUs from './Components/Home/AboutUs/AboutUs';


export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/review">
            <Testimonial></Testimonial>
          </Route>
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/patients">
            <Patients></Patients>
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
