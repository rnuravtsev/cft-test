import {Switch, Route, BrowserRouter} from "react-router-dom";
import Main from "../../../pages/main/main";
import Post from "../../../pages/post/post";
import Users from "../../../pages/users/users.connect";
import User from "../../../pages/user/user.connect";
import Loading from "../loading/loading";
import {postsType, usersType} from "../../../common-prop-types";

import {getMatchingItem} from "../../../utils/utils";


const App = (props) => {

  const {posts, users, isAppReady, initApplication} = props;

  React.useEffect(() => {
    initApplication();
  }, [initApplication]);

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
  );
};

App.propTypes = {
  posts: postsType,
  users: usersType,
  isAppReady: PropTypes.bool.isRequired,
  initApplication: PropTypes.func.isRequired
};

export default App;
