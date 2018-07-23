import React from 'react'
import { Route } from 'react-router-dom'
import Posts from './posts';
import Post from './post';


const Main = (posts) => {
return(
    <div className="container">
    <Route exact path="/" render={() => {
          return (
              <Posts posts={posts}/>)
        }}/>
    <Route exact path="/posts" render={() => {
          return (
              <Posts posts={posts}/>
            )
        }}/>
    <Route exact path="/post" render={() => {
          return (
              <Post/>
            )
        }}/>    
    </div>
    );
}
    export default Main;