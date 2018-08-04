import React, { Component }  from 'react';
import {fetchPost, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';
import Comment from './comment' 
import Categories from './categories'
import Post from './post'
import Error from './error';


class PostDetail extends Component {
     componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    } 
 
    render() {
        if (this.props.error) {
            return (
                <Error/>
            )
        } else
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                <Post key={this.props.posts.id} post={this.props.posts}  />
                </div>
                <div className="col-md-4">
                <Categories/>
                </div>
                </div>
                {this.props.posts.commentCount > 0 && 
                   <div className="row">
                    <div className="col-md-10">
                   <div className="comment-body comment-body-info">
                   {this.props.comments.map(comment => (
                    <Comment key={comment.id} comment={comment} />
                   ))}
               </div>   
               </div>    
               </div>
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
