import DevDashBoard from "./pages/DevDashBoard";
import GlobalStyle from "./globalStyles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AddProject from "./pages/AddProject";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/developersDB">
            <DevDashBoard />
          </Route>
          <Route path="/add_project">
            <AddProject />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
