import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line;

import EventLandingPage from "demos/EventLandingPage.js";
import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";
import ThankYouPage from "ThankYouPage.js";
import BlogIndexPage from "pages/BlogIndex.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aksharsala from "pages/Aksharsala";
import Team from "pages/Team";
import AboutUs from "pages/AboutUs";
import Events from "pages/Events";
export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/blogging">
          <BlogIndexPage />
        </Route>
        <Route path="/aksharshala">
          <Aksharsala/>
        </Route>
        <Route path="/team">
          <Team/>
        </Route>
        <Route path="/team">
        <AboutUs/>
        </Route>
        <Route path="/">
          <EventLandingPage />  
         
        </Route>
        <Route path="/registration">
        <Aksharsala/>
        </Route>
      </Switch>
    </Router>
  );
}

