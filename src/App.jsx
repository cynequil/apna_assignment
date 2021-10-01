import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import Post from "./components/Post";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  const isobject_id = useSelector((state) => state.isobject_id);
  return (
    <>
      <Search />
      <Router>
        <div className="App">
          {isobject_id && <Redirect push to="/post" />}
          <Switch>
            <Route exact path="/">
              <Results />
            </Route>
            <Route path="/post">
              <Post />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
