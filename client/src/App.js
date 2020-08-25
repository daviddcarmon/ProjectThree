import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Booking from "./pages/Booking";
import Navigation from "./components/Navigation";
import CharTeaser from "./components/CharTeaser";

import Confirmation from "./pages/Confirmation";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import MenuTeaser from "./components/MenuTeaser";
import MenuList from "./pages/MenuList";
import CharacterList from "./pages/CharacterList";

// import Calendar from "./components/Calendar";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path={["/"]}>
            <Homepage />
          </Route>
          <Route exact path="/booking">
            <Booking />
          </Route>
          <Route exact path="/confirm">
            <Confirmation />
          </Route>
          <Route exact path="/menuInfo">
            <MenuTeaser />
          </Route>
          <Route exact path="/menuList">
            <MenuList />
          </Route>
          <Route exact path="/charInfo">
            <CharTeaser />
          </Route>
          <Route exact path="/charList">
            <CharacterList />
          </Route>
          <Route>
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
