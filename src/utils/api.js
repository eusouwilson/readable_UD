const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}

export const getAll = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)
export const getCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories)

export const getArticleById = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json())
        .then(data => data)

export const addComment = (bodyContent) =>
      fetch(`${api}/comments`, {
          method: 'POST',
          headers: {
              ...headers,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyContent)
      }).then(res => res.json())
export const deleteComment = (id) =>
      fetch(`${api}/comments/${id}`, {
          method: 'DELETE',
          headers: {
              ...headers,
              'Content-Type': 'application/json'
          },
      }).then(res => res.json())
          .then(data => data)      

export const getCommentsById = (id) =>
      fetch(`${api}/posts/${id}/comments`, {headers})
          .then(res => res.json())
          .then(data => data)

export const getAllByCategories = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)
        
export const votePost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())
    
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


    export const addPost = (bodyContent) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

    export const editPost = (id, bodyContent) =>
    fetch(`${api}/posts/${id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
    }).then(res => res.json())

    export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
        .then(data => data)

