import songReducres from "./reducres/songReducer";
import counterReducres from "./reducres/counterReduces";
import { createStore,combineReducers } from "redux";


let rootReducer=combineReducers({
    counter:counterReducres,
    song:songReducres,
})


let store=createStore(rootReducer);
export default store