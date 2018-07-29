const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}
// list all posts
export const getAll = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)

// list all Categories
export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

// filter post by your id        
export const getArticleById = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json())
        .then(data => data)


// Add a comment to a post
export const addComment = (bodyContent) =>
      fetch(`${api}/comments`, {
          method: 'POST',
          headers: {
              ...headers,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyContent)
      }).then(res => res.json())

// filter comment by your id 
export const getCommentById = (id) =>
      fetch(`${api}/comments/${id}`, {headers})
          .then(res => res.json())
          .then(data => data)
  
// delete a comment  
export const deleteComment = (id) =>
      fetch(`${api}/comments/${id}`, {
          method: 'DELETE',
          headers: {
              ...headers,
              'Content-Type': 'application/json'
          },
      }).then(res => res.json())
          .then(data => data)      

// edit a comment          
export const editComment = (id, bodyContent) =>
      fetch(`${api}/comments/${id}`, {
            method: 'PUT',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyContent)
       }).then(res => res.json())

       
//list all the comments of a given post       
export const getCommentsById = (id) =>
      fetch(`${api}/posts/${id}/comments`, {headers})
          .then(res => res.json())
          .then(data => data)

//list all posts by categories          
export const getAllByCategories = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)

//add a vote to a post        
export const votePost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

//add a vote to a comment   
export const voteComment = (id, bodyContent) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())
        .then(data => data)

//add a new post
export const addPost = (bodyContent) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

//edit a certain post
export const editPost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

//delete a certain post
export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)

