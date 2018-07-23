import React, { Component }  from 'react'
import {fetchAllPosts} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'


class Posts extends Component {

    componentDidMount() {        
       this.props.dispatch(fetchAllPosts())
    }
    componentWillUnmount() {        
        console.log(this.props.posts)
     }
 
    render() {
        
        return(
          <div className="container">
          <div className="row" >
              {this.props.posts.map(post => (
                  <Post key={post.id} post={post}  />
              ))}
            </div>
            </div>

        )
    };
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        state: state
    }
}

export default connect(mapStateToProps)(Posts);
