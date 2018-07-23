import React, { Component }  from 'react';
import {fetchPost, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';

import Post from './post'

class PostDetail extends Component {
    author = ""
    body = ""
    sorted = ""
 

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
