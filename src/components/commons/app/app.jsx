import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import Main from "../../../pages/main/main";
import AllPosts from "../../../pages/all-posts/all-posts";
import Users from "../../../pages/users/users";
import Post from "../../../pages/post/post";
import User from "../../../pages/user/user";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
        >
          <Main/>
        </Route>
        <Route
          exact
          path="/posts"
        >
          <AllPosts/>
        </Route>
        <Route
          exact
          path="/posts/?id"
        >
          <Post/>
        </Route>
        <Route
          exact
          path="/users/"
        >
          <Users/>
        </Route>
        <Route
          exact
          path="/users/?id"
        >
          <User/>
        </Route>
      </Switch>
    </Router>

  )
};

export default App;
