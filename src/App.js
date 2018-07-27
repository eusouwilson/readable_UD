import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Posts from './components/posts';
import postDetail from './components/postDetail';
import Menu from './templates/menu';
import CategoryPosts from './components/categoryPosts';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AddPost from './components/addPost'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
          <Menu/>
          <Switch>
              <Route exact path="/" component={Posts}></Route>
              <Route exact path="/posts" component={Posts}></Route>
              <Route exact path="/addPost" component={AddPost}></Route>
              <Route path="/:posts/:id" component={postDetail}></Route>
              <Route exact path="/:category" component={CategoryPosts}></Route>
          </Switch>          
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
