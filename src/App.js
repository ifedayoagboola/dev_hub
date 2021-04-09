import DevDashBoard from "./DevDashBoard";
import GlobalStyle from "./globalStyles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <SignIn />
      <SignUp />
      <DevDashBoard />
    </div>
  );
}

export default App;
