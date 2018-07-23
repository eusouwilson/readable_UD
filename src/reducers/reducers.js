import {
    GET_POSTS,
    GET_POST,
    GET_CATEGORY,
    GET_POST_CATEGORY
} from "../actions/actions";

const initialPostState = {
    posts: [],
    comments: [],
    post: [],
    comment: [],
    categories: []
}

function posts(state = initialPostState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POST:
            let error = ""
            if(action.post.error || JSON.stringify(action.post)==='{}') {
                error = true
            }
            return {
                ...state,
                post: action.post,
                comments: state.comments,
                error: error
            }
        case GET_POST_CATEGORY:
            if(action.post.error || JSON.stringify(action.post)==='{}') {
                error = true
            }
            return {
                ...state,
                post: action.post,
                comments: state.comments,
                error: error
            }
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}


export default posts
