import {
    GET_POSTS,
    GET_POST,
    GET_CATEGORY,
    GET_POST_CATEGORY,
    GET_COMMENTS,
    VOTE_POST,
    VOTE_COMMENT
} from "../actions/actions";

const initialPostState = {
    posts: [],
    comments: [],
    post: [],
    comment: [],
    categories: []
}

function posts(state = initialPostState, action) {
    var temp;
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            }
        case GET_POST:
            let error = ""
            if(action.posts.error || JSON.stringify(action.posts)==='{}') {
                error = true
            }
            return {
                ...state,
                posts: action.posts,
                comments: state.comments,
                error: error
            }
        case GET_POST_CATEGORY:
            if(action.posts.error || JSON.stringify(action.posts)==='{}') {
                error = true
            }
            return {
                ...state,
                posts: action.posts,
                comments: state.comments,
                error: error
            }
        case GET_CATEGORY:
            return {
                ...state,
                categories: action.categories
            }
        
        case GET_COMMENTS:
            return {
                ...state,
                posts: state.posts,
                comments: action.comments
            }
        
        case VOTE_POST:
            temp = Object.entries(state)[0][1]
            temp.map((posts) => posts.id === action.posts.id ? posts.voteScore = action.posts.voteScore : "")
            return {
                ...state,
                posts: temp
            }
        case VOTE_COMMENT:
            temp = state.comments
            temp.map((comment) => comment.id === action.comment.id ?  comment.voteScore = action.comment.voteScore : "")
            return {
                ...state,
                comments: temp

            }        
        default:
            return state
    }
}


export default posts
