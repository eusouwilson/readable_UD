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
    ADD_COMMENT,
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
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts.filter(post => post.deleted !== true )
            }
        case GET_POST:
            let error = ""
            if(action.posts.error || action.posts==='{}') {
                error = true    
            }
            return {
                ...state,
                posts: [action.posts],
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
        case ADD_COMMENT:
            return {
                ...state,

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
            const updatePost = state.posts.map(post =>
                post.id === action.comment.parentId ? {
                    ...post,
                    commentCount: post.commentCount -1
                } : post
            )
            temp = state.comments.filter(comment => comment.id !== action.comment.id)
            return {
                ...state,
                posts: updatePost,
                comments: temp
            }
        case VOTE_POST:
                const votePost = state.posts.map(post =>
                    post.id === action.posts.id ? 
                    {
                        ...post,
                        voteScore: action.posts.voteScore
                    } : post
                )
            return {
                ...state,
                posts: votePost
            }
        case VOTE_COMMENT:
            const voteComment = state.comments.map(comment =>
                comment.id === action.comment.id ? 
                {
                    ...comment,
                    voteScore: action.comment.voteScore
                } : comment
            )
         return {
                ...state,
                comments: voteComment

            }
        case ADD_POST:
            return {
                ...state,
            }            
        case EDIT_POST:
            return {
                ...state
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
