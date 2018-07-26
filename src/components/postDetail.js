import React, { Component }  from 'react';
import {fetchPost, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';
import Comment from './comment' 
import Categories from './categories'

import Post from './post'

class PostDetail extends Component {
     componentDidMount() {
        this.props.dispatch(fetchAllComments(this.props.match.params.id))
        this.props.dispatch(fetchPost(this.props.match.params.id))
    } 
 
    render() {
        if (this.props.error) {
            return (
                <div>error 404</div>
            )
        } else
        return(
            <div className="container">
                <div className="row">
                <div className="col-md-8">
                <Post key={this.props.post.id} post={this.props.post}  />
                </div>
                <div className="col-md-4">
                <Categories/>
                </div>
                </div>
                {this.props.post.commentCount > 0 && 
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
function mapStateToProps(state) {
    return {
        comments: state.comments,
        post: state.posts,
        state: state,
        error: state.error
    }
}

export default connect(mapStateToProps)(PostDetail);
