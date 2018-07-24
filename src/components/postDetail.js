import React, { Component }  from 'react';
import {fetchPost, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';
import Comment from './comment' 

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
                <Post key={this.props.post.id} post={this.props.post}  />
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="bs-callout bs-callout-info">
                    <h4>{this.props.post.commentCount} - COMMENTS</h4>
                        {this.props.comments.map(comment => (
                        <Comment key={comment.id} comment={comment}  />
                        ))}
                    </div>
                    </div>
                </div>
            </div>
    
        )
    
    }; 
}
function mapStateToProps(state) {
    return {
        comments: state.comments,
        post: state.post,
        state: state,
        error: state.error
    }
}

export default connect(mapStateToProps)(PostDetail);
