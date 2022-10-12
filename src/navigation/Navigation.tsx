import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import LandingRoute from './LandingRoute';
import Dashboard from '../views/adminPanel/Dashboard/Dashboard';
import Testing from '../views/adminPanel/testing/Testing';
import Home from '../views/landingPage/home/Home';
import AboutMe from '../views/landingPage/aboutMe/AboutMe';
import Skills from '../views/landingPage/skills/Skills';
import Portfolio from '../views/landingPage/Portfolio';
import Experience from '../views/landingPage/Experience';
import ContactMe from '../views/landingPage/contactMe';

const Navigation = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/admin-panel/testing" component={Testing} />
        <PrivateRoute path="/admin-panel/dashboard" component={Dashboard} />
        <PrivateRoute path="/admin-panel/" component={Dashboard} />

        <LandingRoute exact path="/" component={Home} />
        <LandingRoute path="/home" component={Home} />
        <LandingRoute path="/about-me" component={AboutMe} />
        <LandingRoute path="/skills" component={Skills} />
        <LandingRoute path="/portfolio" component={Portfolio} />
        <LandingRoute path="/experience" component={Experience} />
        <LandingRoute path="/contact-me" component={ContactMe} />

        <Route path="*">
          <h1>Error 404</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
