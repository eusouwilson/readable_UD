# Readable Project
The project to control news and organize each news according to its category, the same will be listed on the homepage and also on a page by category, the system has an option for the user to leave their opinion positive or negative and comments on the news.
The user can edit the news or remove it
The user can edit the comment or remove it

## TL;DR

To get started developing right away:
Available only for npm
* enter the folder src  `cd src`
* install all project dependencies with `npm install`
* start the development server with `npm start`



## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── api-server # server provided by udacity to initialize it execute 'node server'
    └── actions
    │    └── actions.js # contains all actions used
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not                    required.
    └── components
      ├── posts.js #component listing the post
      ├── post.js # component to create a post
      ├── addPost # component to add a post
      ├── categories #component listing the categories
      ├── categoryPosts #component listing the post by category.
      ├── commnent #component listing the comments.
      ├── editCommnent #component for edit a comment.
      ├── editPost #component for edit a post.
      ├── postDetail #component to display a post.
    └── reducers
    │    └── reducers.js # contains all reducers used
    └── viewers
    │    └── menu.js # contains all menu.
    └── utils
    │    ├── Api.js # A JavaScript API for the provided 
         └── utils.js # contains utilities as one generated from uuid (which is an improved version of that found in this link: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript) and timeStampToString found in this link:(https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript)
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```



# API Server

To install and start the API server, run the following commands in this directory:

* `npm install`
* `node server`

## Using The Server

### Include An Authorization Header

All requests should use an **Authorization header** to work with your own data:

```js
fetch(
    url,
    {
        headers: { 'Authorization': 'whatever-you-want' }
    }
)
```


### Comment Counts
Posts retrieved in a list or individually now contain comment counts in the format `post: { commentCount: 0 }`.  This should make it easier to display the number of comments a post has without having to call the comments endpoint for each post.   This count is updated whenever a comment is added or deleted via the `POST /comments` or `DELETE /comments/:id` endpoints.

### API Endpoint

The following endpoints are available:

| Endpoints       | Usage          | Params         |
|-----------------|----------------|----------------|
| `GET /categories` | Get all of the categories available for the app. List is found in `categories.js`. Feel free to extend this list as you desire. |  |
| `GET /:category/posts` | Get all of the posts for a particular category. |  |
| `GET /posts` | Get all of the posts. Useful for the main page when no category is selected. |  |
| `POST /posts` | Add a new post. | **id** - UUID should be fine, but any unique id will work <br> **timestamp** - [Timestamp] Can in whatever format you like, you can use `Date.now()` if you like. <br> **title** - [String] <br> **body** - [String] <br> **author** - [String] <br> **category** -  Any of the categories listed in `categories.js`. Feel free to extend this list as you desire. |
| `GET /posts/:id` | Get the details of a single post. | |
| `POST /posts/:id` | Used for voting on a post. | **option** - [String]: Either `"upVote"` or `"downVote"`. |
| `PUT /posts/:id` | Edit the details of an existing post. | **title** - [String] <br> **body** - [String] |
| `DELETE /posts/:id` | Sets the deleted flag for a post to 'true'. <br> Sets the parentDeleted flag for all child comments to 'true'. | |
| `GET /posts/:id/comments` | Get all the comments for a single post. | |
| `POST /comments` | Add a comment to a post. | **id** - Any unique ID. As with posts, UUID is probably the best here. <br> **timestamp** - [Timestamp] Get this however you want. <br> **body** - [String] <br> **author** - [String] <br> **parentId** - Should match a post id in the database. |
| `GET /comments/:id` | Get the details for a single comment. | |
| `POST /comments/:id` | Used for voting on a comment. | **option** - [String]: Either `"upVote"` or `"downVote"`.  |
| `PUT /comments/:id` | Edit the details of an existing comment. | **timestamp** - timestamp. Get this however you want. <br> **body** - [String] |
| `DELETE /comments/:id` | Sets a comment's deleted flag to `true`. | &nbsp; |


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
