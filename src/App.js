import "./App.scss" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <>
     <Router>
        <Switch>
          <Route path="/AboutUs" exact component={AboutUs} />
        </Switch>
      </Router>
   
    </>
  );
}

export default App;
