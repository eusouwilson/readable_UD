import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import Main from './components/routers';
import Posts from './components/posts';
import Categories from './components/categories';
import postDetail from './components/postDetail';
import About from './components/about';
import Menu from './templates/menu';
import CategoryPosts from './components/categoryPosts';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
          <Menu/>
          <Switch>
              <Route exact path="/" component={Posts}></Route>
              <Route exact path="/posts" component={Posts}></Route>
              <Route exact path="/categories" component={Categories}></Route>
              <Route path="/:posts/:id" component={postDetail}></Route>
              <Route exact path="/:category" component={CategoryPosts}></Route>



          </Switch>          
          <About/>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
