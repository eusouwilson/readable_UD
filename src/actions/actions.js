import * as postAPI from '../utils/api';

// list all posts
export const GET_POSTS = 'GET_POSTS'
export function getPosts(posts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const fetchAllPosts = (sort) => dispatch => {
    if(sort === 'byDate') {
        postAPI.getAll().then((posts) => dispatch(getPosts(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj1.timestamp - obj2.timestamp;
        }))))
    }else if (sort === 'score') {
        postAPI.getAll().then((posts) => dispatch(getPosts(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj2.voteScore - obj1.voteScore;
        }))))
    }
    else{
        postAPI.getAll().then((posts) => dispatch(getPosts(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj2.timestamp - obj1.timestamp;
        }))))
    }
   
}

// list a particular post
export const GET_POST = 'GET_POST'
export function getPost(posts, comments) {
    return {
        type: GET_POST,
        posts,
        comments
    }
}
export const fetchPost = (id) => dispatch => {
    postAPI.getArticleById(id).then((post) => dispatch(getPost(post)))
}

// Add a comment to a post
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

// delete a comment
export const DELETE_COMMENT = 'DELETE_COMMENT'
export function deleteComment(comment) {
    return {
        type: DELETE_COMMENT,
        comment
    }
}
export const fetchDeleteComment = (id, body) => dispatch => {
    postAPI.deleteComment(id, body).then((comment) => {
        dispatch(deleteComment(comment))
        postAPI.getArticleById(comment.parentId).then((post) => {
        postAPI.editPost(comment.parentId, {commentCount: post.commentCount-1})
        })
    })
}

// list all categories
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

//list all posts by categories
export const GET_POST_CATEGORY = 'GET_POST_CATEGORY'
export function getPostCategory(posts) {
    return {
        type: GET_POST_CATEGORY,
        posts
        }
}
export const fetchPostCategory = (category, sort) => dispatch => {
    if(sort === 'byDate') {
        postAPI.getAllByCategories(category).then((posts) => dispatch(getPostCategory(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj1.timestamp - obj2.timestamp;
        }))))
    }else if (sort === 'score') {
        postAPI.getAllByCategories(category).then((posts) => dispatch(getPostCategory(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj2.voteScore - obj1.voteScore;
        }))))
    }
    else{
        postAPI.getAllByCategories(category).then((posts) => dispatch(getPostCategory(posts.filter(post => post.deleted !== true ).sort(function(obj1, obj2) {
            return obj2.timestamp - obj1.timestamp;
        }))))
    }
}

//list all the comments of a given post
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
//list a certain comment
export const GET_COMMENT = 'GET_COMMENT'
export function getComment(comment) {

    return {
        type: GET_COMMENT,
        comment
    }
}
export const fetchComment = (id) => dispatch => {
    postAPI.getCommentById(id).then((comment) => dispatch(getComment(comment)))
}

//edit a certain comment
export const EDIT_COMMENT = 'EDIT_COMMENT'
export function editComment(comment) {
    return {
        type: EDIT_COMMENT,
        comment,
    }
}
export const fetchEditComment = (id, body) => dispatch => {
    postAPI.editComment(id, body).then((comment) => dispatch(editComment(comment)))
}

//add a vote to a post
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

//add a vote to a comment
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

//add a new post
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

//edit a certain post
export const EDIT_POST = 'EDIT_POST'
export function editPost(post) {
    return {
        type: EDIT_POST,
        post,
    }
}
export const fetchEditPost = (id, body) => dispatch => {
    postAPI.editPost(id, body).then((post) => dispatch(editPost(post)))
}

//delete a certain post
export const DELETE_POST = 'DELETE_POST'
export function deletePost(posts) {
    return {
        type: DELETE_POST,
        posts
    }
}
export const fetchDeletePost = (id, body) => dispatch => {
    postAPI.deletePost(id, body).then((posts) => dispatch(deletePost(posts)))
}