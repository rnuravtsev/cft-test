import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../../../pages/main/main";
import Posts from "../../../pages/posts/posts.connect";
import Post from "../../../pages/post/post";
import Users from "../../../pages/users/users.connect";
import User from "../../../pages/user/user";
import Loading from "../loading/loading";

import {getMatchingItem} from "../../../utils/utils";


const App = (props) => {

  const {posts, users, isAppReady, initApplication} = props;

  React.useEffect(() => {
    initApplication();
  }, []);

  return (
    <>
      {!isAppReady && <Loading isShow={isAppReady}/>}
      <BrowserRouter>
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
            <Posts/>
          </Route>
          <Route
            exact
            path="/posts/:id"
            render={({match}) => (
              <Post
                post={getMatchingItem(posts, match)}
              />
            )}
          />
          <Route
            exact
            path="/users/"
          >
            <Users/>
          </Route>
          <Route
            exact
            path="/users/:id"
            render={({match}) => (
              <User
                user={getMatchingItem(users, match)}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  )
};

export default App;
