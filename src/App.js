import DevDashBoard from "./pages/DevDashBoard";
import GlobalStyle from "./globalStyles";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

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
          <Route exact path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/developersDB">
            <DevDashBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
