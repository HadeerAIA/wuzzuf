import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.scss"
import AdditionalInfo from "./component/editProfile/additionalInfo";
import Experience from "./component/editProfile/experience";
import GeneralInfo from "./component/editProfile/generalInfo";
import LearningInterests from "./component/editProfile/learningInterests";
import OnlinePresence from "./component/editProfile/onlinePresence";
import Sidebar from "./component/editProfile/sidebar"

function App() {
  return (
    <>
      <Router>
        <section className="container mt-3">
          <div className="row">
            <Sidebar />
            <Switch>
              <Route path="/sidebar" exact component={Sidebar} />
              <Route path="/additional-info" exact component={AdditionalInfo} />
              <Route path="/online-presence" exact component={OnlinePresence} />
              <Route path="/general-info" exact component={GeneralInfo} />
              <Route path="/experience" exact component={Experience} />
              <Route path="/learning-interests" exact component={LearningInterests} />
            </Switch>
          </div>
        </section>
      </Router>

    </>
  );
}

export default App;
