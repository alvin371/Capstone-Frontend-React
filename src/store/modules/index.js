import { combineReducers } from "redux"
import authReducer  from './auth/reducer/authReducer'
import { postsState }  from "./posts/reducer/postsReducer";


const reducer = combineReducers({
  Auth: authReducer,
  PostsState: postsState,

})

export default reducer

