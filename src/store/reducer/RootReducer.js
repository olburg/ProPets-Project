import { combineReducers } from "redux";
import { PersonsReducer } from "./PersonsReducer";
import { PostsReducer } from "./PostsReducer";

const RootReducer = combineReducers({
  persons: PersonsReducer,
  posts: PostsReducer
});

export default RootReducer;