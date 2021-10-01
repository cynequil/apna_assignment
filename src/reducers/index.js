import { combineReducers } from "redux";
import search_response from "./search_response";
import object_id from "./object_id";
import isobject_id from "./isobject_id";
import post_response from "./post_response";
import children from "./childern";
const allReducers = combineReducers({
  search_response: search_response,
  object_id: object_id,
  isobject_id: isobject_id,
  post: post_response,
  children: children,
});

export default allReducers;
