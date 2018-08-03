# MyReads Project
The project to control news and organize each news according to its category, the same will be listed on the homepage and also on a page by category, the system has an option for the user to leave their opinion positive or negative and comments on the news.
The user can edit the news or remove it
The user can edit the comment or remove it

## TL;DR

To get started developing right away:
Available only for npm
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

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
