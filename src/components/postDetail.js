import React, { Component }  from 'react';
import {fetchPost, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';
import Comment from './comment' 
import Categories from './categories'
import Post from './post'

class PostDetail extends Component {
         commentCount;
     componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    } 
 
    render() {
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                {this.props.posts.map(post => (
                        <Post key={post.id} post={post}  />
                ))}
                </div>
                <div className="col-md-4">
                <Categories/>
                </div>
                </div>
                {this.props.comments.length ?
                   <div className="row">
                    <div className="col-md-10">
                   <div className="comment-body comment-body-info">
                   {this.props.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                   ))}
               </div>   
               </div>    
               </div>:<div  className="col-md-8 alert alert-success">Your comment is important for us</div>
                }   
             
            </div>
    
        )
    
    }; 
}

const mapStateToProps = state => ({
    posts: state.posts,
    state: state,
    comments: state.comments,
    error: state.error
  })
  
const mapDispatchToProps = dispatch => ({
    getPost: (id) =>  {
            dispatch(fetchAllComments(id)); 
            dispatch(fetchPost(id))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
