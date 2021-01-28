import ReactDOM from "react-dom";
import App from "./components/commons/app/app.connect";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import rootReducer from "store/reducers/root-reducer";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {composeWithDevTools} from "redux-devtools-extension";

const api = createAPI();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api))
  )
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
