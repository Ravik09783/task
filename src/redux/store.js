import { createStore } from "redux";
import root from "./redux/reducers/rootReducers";

const store = createStore(root)

export default store;