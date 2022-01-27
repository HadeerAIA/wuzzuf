import Navbar from "./components/navbar/navbar";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";

import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/AboutUs" exact component={AboutUs} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Regist" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
