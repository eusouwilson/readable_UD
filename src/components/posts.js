import React, { Component }  from 'react'
import {fetchAllPosts} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import Comment from './comment' 


class Posts extends Component {

    componentDidMount() {        
       this.props.dispatch(fetchAllPosts())
    }
  
 
    render() {
        
        return(
          <div className="container">
          <div className="row" >
              {this.props.posts.map(post => (
                  <Post key={post.id} post={post}  />
              ))}
            </div>
            <div>
              {this.props.comments.map(comment => (
                    <Comment key={comment.id} comment={comment}  />
              ))}

          </div>
            </div>

        )
    };
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        state: state,
        comments: state.comments

    }
}

export default connect(mapStateToProps)(Posts);
