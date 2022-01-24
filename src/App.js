import "./App.scss"
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./components/Register/Register";

function App() {
  return (
    <>
    
     <Router>
        <Switch>
          <Route path="/Login" exact component={Login} />
          <Route path="/Regist" exact component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
