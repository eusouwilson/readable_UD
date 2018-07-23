import * as postAPI from '../utils/api';

export const GET_POSTS = 'GET_POSTS'
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}
export const fetchAllPosts = () => dispatch => {
    postAPI.getAll().then((posts) => dispatch(getPosts(posts)))
}

export const GET_POST = 'GET_POST'
export function getPost(post, comments) {
    return {
        type: GET_POST,
        post,
        comments
    }
}
export const fetchPost = (id) => dispatch => {
    postAPI.getArticleById(id).then((post) => dispatch(getPost(post)))
}

export const ADD_COMMENT = 'ADD_COMMENT'
export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment,
    }
}
export const fetchAddComment = (body) => dispatch => {
    postAPI.addComment(body).then((comment) => dispatch(addComment(comment)))
}

// lista todas as categorias
export const GET_CATEGORY = 'GET_CATEGORY'
export function getCategory(categories) {
    return {
        type: GET_CATEGORY,
        categories
    }
}
export const fetchAllCategories = () => dispatch => {
    postAPI.getCategories().then((categories) => dispatch(getCategory(categories)))
}

//post por categorias
export const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
export function getPostCategory(post) {
    return {
        type: GET_POST_CATEGORY,
        post
        }
}
export const fetchPostCategory = (category) => dispatch => {
    postAPI.getAllByCategories(category).then((post) => dispatch(getPostCategory(post)))
}


export const GET_COMMENTS = 'GET_COMMENTS'
export function getComments(comments) {

    return {
        type: GET_COMMENTS,
        comments
    }
}
export const fetchAllComments = (id) => dispatch => {
    postAPI.getCommentsById(id).then((comments) => dispatch(getComments(comments)))
}
