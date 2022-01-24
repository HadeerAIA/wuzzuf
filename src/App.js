import "./App.scss"
import Navbar from './components/navbar/navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={'explore'} />
        </Switch>
      </Router>

      <p>lorem</p>
      <i className='fa fa-user'></i>
    </>
  );
}

export default App;
