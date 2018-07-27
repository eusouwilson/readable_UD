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
export function getPost(posts, comments) {
    return {
        type: GET_POST,
        posts,
        comments
    }
}
export const fetchPost = (id) => dispatch => {
    postAPI.getArticleById(id).then((posts) => dispatch(getPost(posts)))
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
export function getPostCategory(posts) {
    return {
        type: GET_POST_CATEGORY,
        posts
        }
}
export const fetchPostCategory = (category) => dispatch => {
    postAPI.getAllByCategories(category).then((posts) => dispatch(getPostCategory(posts)))
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

export const VOTE_POST = 'VOTE_POST'
export function votePost(posts) {
    return {
        type: VOTE_POST,
        posts
    }
}
export const fetchVotePost = (id, data) => dispatch => {
    postAPI.votePost(id, data).then((posts) => dispatch(votePost(posts)))
}

export const VOTE_COMMENT = 'VOTE_COMMENT'
export function voteComment(comment) {
    return {
        type: VOTE_COMMENT,
        comment
    }
}
export const fetchVoteComment = (id, data) => dispatch => {
    postAPI.voteComment(id, data).then((comment) => dispatch(voteComment(comment)))
}

export const ADD_POST = 'ADD_POST'
export function addPost(posts) {
    return {
        type: ADD_POST,
        posts,
    }
}
export const fetchAddPost = (body) => dispatch => {
    postAPI.addPost(body).then((posts) => dispatch(addPost(posts)))
}