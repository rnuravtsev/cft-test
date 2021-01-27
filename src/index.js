import ReactDOM from "react-dom";
import App from "./components/commons/app/app";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
// import {createAPI} from "./services/api/api";
// import {requiredAuthorization} from "./store/action";
// import {AuthorizationStatus} from "./consts";
// import rootReducer from "./store/reducers/root-reducer";
// import {redirect} from "./store/middlewares/redirect";

// const api = createAPI(() => store.dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH)));

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(
//         applyMiddleware(thunk.withExtraArgument(api)),
//         applyMiddleware(redirect),
//     ),
// );

ReactDOM.render(
    <App/>,
    document.querySelector(`#root`)
);
