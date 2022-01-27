import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
// import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ExplorList from "./components/Explorjob/explorList/index";
import SavedList from "./components/saved-job/savedList/index";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ExplorList} />
          <Route path="/saved" exact component={SavedList} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Regist" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
