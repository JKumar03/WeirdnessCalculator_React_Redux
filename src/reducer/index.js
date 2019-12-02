import { combineReducers } from 'redux';
import { gifReducer } from "./gif-reducer";
import { wierdnessReducer } from "./wierdness-reducer";

const rootReducer = combineReducers({
    gifs: gifReducer,
    wierdness: wierdnessReducer
});

export default rootReducer;