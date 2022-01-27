import API_ROUTE from "../../../../apiRoute";
import axios from 'axios'
// import { BEFORE_STATE_POST, FETCH_POSTS, FETCH_POSTS_ERROR, GET_POST_SUCCESS, GET_POST_ERROR, CREATE_POST_SUCCESS, CREATE_POST_ERROR, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR, DELETE_POST_SUCCESS, DELETE_POST_ERROR, FETCH_AUTH_POSTS, FETCH_AUTH_POSTS_ERROR  } from '../postsTypes'
import  {history} from '../../../../history'
import { BEFORE_STATE_POST, FETCH_POSTS, FETCH_POSTS_ERROR, GET_POST_SUCCESS, DELETE_POST_SUCCESS, DELETE_POST_ERROR,GET_POST_ERROR} from '../postsTypes'


// var API_ROUTE = 'https://newsapi.org/v2/everything?' +
// 'q=Apple&' +
// 'from=2022-01-23&' +
// 'sortBy=popularity&' +
// 'apiKey=32e8942831bc4b54854ebca687eb1d61';
 
export const fetchPosts = () => {



  return async (dispatch) => {
    dispatch({ type: BEFORE_STATE_POST })
    try {
      const res  = await axios.get(`${API_ROUTE}/news`)
      dispatch({ type: FETCH_POSTS, payload: res.data })
    } catch(err){
      dispatch({ type: FETCH_POSTS_ERROR, payload: err.response ? err.respons.data.error : "" })
    }
  }
}

export const fetchPost = id => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res  = await axios.get(`${API_ROUTE}/news/${id}`)
      dispatch({ type: GET_POST_SUCCESS, payload: res.data.response })
    } catch(err){
      dispatch({ type: GET_POST_ERROR, payload: err.response.data.error })
      history.push('/'); //incase the user manually enter the param that dont exist
    }
  }
}

// export const fetchAuthPosts = id => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_POST })

//     try {
//       const res  = await axios.get(`${API_ROUTE}/user_posts/${id}`)
//       dispatch({ type: FETCH_AUTH_POSTS, payload: res.data.response })
//     } catch(err){
//       dispatch({ type: FETCH_AUTH_POSTS_ERROR, payload: err.response.data.error })
//     }
//   }
// }

// export const createPost = (createPost) => {
//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_POST })

//     try {
//       const res = await axios.post(`${API_ROUTE}/news/create`, createPost)
//       dispatch({ 
//         type: CREATE_POST_SUCCESS,  
//         payload: res.data.response
//       })
//       history.push('/');
//     } catch(err) {
//       dispatch({ type: CREATE_POST_ERROR, payload: err.response.data.error })
//     }
//   }
// }

// export const updatePost = (updateDetails, updateSuccess) => {

//   return async (dispatch) => {

//     dispatch({ type: BEFORE_STATE_POST })

//     try {
//       const res = await axios.put(`${API_ROUTE}/posts/${updateDetails.id}`, updateDetails)
//       dispatch({ 
//         type: UPDATE_POST_SUCCESS,
//         payload: res.data.response
//       })
//       updateSuccess()
//     } catch(err) {
//       dispatch({ type: UPDATE_POST_ERROR, payload: err.response.data.error })
//     }
//   }
// }

export const deletePost = (id) => {

  return async (dispatch) => {

    dispatch({ type: BEFORE_STATE_POST })

    try {
      const res = await axios.delete(`${API_ROUTE}/posts/${id}`)
      dispatch({ 
        type: DELETE_POST_SUCCESS,
        payload: {
          deletedID: id,
          message: res.data.response
        } 
      })
      history.push('/');
    } catch(err) {
      dispatch({ type: DELETE_POST_ERROR, payload: err.response.data.error })
    }
  }
}
