import {
    GET_POSTS,
    GET_POST,
    GET_CATEGORY,
    GET_POST_CATEGORY,
    GET_COMMENTS,
    GET_COMMENT,
    VOTE_POST,
    VOTE_COMMENT,
    DELETE_COMMENT,
    ADD_POST,
    EDIT_POST,
    DELETE_POST,
    EDIT_COMMENT

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
        case GET_COMMENT:
            return {
                ...state,
                comment: action.comment,
            }   
        case EDIT_COMMENT:
            return {
                ...state,

            }
        case DELETE_COMMENT:
            for (var i = state.comments.length - 1; i >= 0; i--) {
                if (state.comments[i].id === action.comment.id) {
                    state.comments.splice(i, 1)
                }
            }
            return {
                ...state
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
        case ADD_POST:
            state.posts.push(action.posts)
            console.log(...state)
            return {
                ...state,
                
            }            
        case EDIT_POST:
            temp = Object.entries(state)[0][1]
            temp.map((post) => post.id === action.post.id ? post.voteScore = action.post.voteScore : "")
            
            return {
                ...state,
                posts: temp

            }
        case DELETE_POST:
            for (let i = state.posts.length - 1; i >= 0; i--) {
                if (state.posts[i].id === action.posts.id) {
                    state.posts.splice(i, 1)
                }
            }
            return {
                ...state
            }    
        default:
            return state
    }
}


export default posts
