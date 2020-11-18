import { createStore, combineReducers } from "redux";
import topics from "./reducers/topics_list.js";
import topicContent from "./reducers/topic_content.js";
import user from './reducers/user.js';

 const store = createStore(combineReducers({
     topics,
     topicContent,
     user,
 }))

 export default store;