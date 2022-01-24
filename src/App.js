import "./App.scss" 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Component/ContactUs/ContactUs";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/ContactUs" exact component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
