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
    EDIT_COMMENT,
} from "../actions/actions";
const initialPostState = {
    posts: [],
    comments: [],
    comment: [],
    categories: [],
}

function posts(state = initialPostState, action) {
    let temp;
    let tempPost;
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts.filter(post => post.deleted !== true )
            }
        case GET_POST:
            let error = ""
            if(action.posts.error || action.posts==='[]') {
                error = true    
            }
            return {
                ...state,
                posts: action.posts,
                comments: state.comments,
                error: error
            }
        case GET_POST_CATEGORY:
            if(action.posts.error || action.posts==='[]') {
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
                comments: action.comments.filter(comment => comment.parentDeleted === false)
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
            tempPost = {...state.posts}
            temp = state.comments.filter(comment => comment.id !== action.comment.id)
            tempPost.commentCount = tempPost.commentCount -1
            return {
                ...state,
                posts: tempPost,
                comments: temp
            }
        case VOTE_POST:
            if (state.posts.length) {
                temp = state.posts.slice()
                temp.map((posts) => posts.id === action.posts.id ? posts.voteScore = action.posts.voteScore : "")
            }else{
                temp = {...state.posts}
                temp.voteScore = action.posts.voteScore 
            }
            return {
                ...state,
                posts: temp
            }
        case VOTE_COMMENT:
            temp = state.comments.slice()
            temp.map((comment) => comment.id === action.comment.id ?  comment.voteScore = action.comment.voteScore : "")
            return {
                ...state,
                comments: temp

            }
        case ADD_POST:
            temp = {...state.posts}
            temp.push(action.posts)
            return {
                ...state,
            }            
        case EDIT_POST:
            temp = state.posts.slice()
            temp.map((post) => post.id === action.post.id ? post.voteScore = action.post.voteScore : "")
            
            return {
                ...state,
                posts: temp

            }
        case DELETE_POST:
            state.posts.length?  temp = state.posts.slice().filter(post => post.id !== action.posts.id): temp =[]

            return {
                ...state,
                posts: temp
            }   
        default:
            return state
    }
}


export default posts
