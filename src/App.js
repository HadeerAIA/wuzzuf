import Navbar from "./components/navbar/navbar";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
AboutUs;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={"explore"} />
        </Switch>
      </Router>

      <Router>
        <Switch>
          <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
