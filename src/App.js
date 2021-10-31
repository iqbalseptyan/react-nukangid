import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import ConsultantPage from "./pages/consultant";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/consultant" component={ConsultantPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
