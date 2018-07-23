import React, { Component }  from 'react';
import {fetchPost, fetchAddComment, fetchAllComments} from '../actions/actions'
import {connect} from 'react-redux';
import {getUid, } from '../utils/utils';
import ReactDOM from "react-dom"
import Post from './post'
import Comment from './comment'

class PostDetail extends Component {
    state = {
        isFresh: 1
    }
    author = ""
    body = ""
    sorted = ""

    addComment = () => {
        this.props.dispatch(fetchAddComment({
            id: getUid(24, 16),
            timestamp: Date.now(),
            body: this.body,
            author: this.author,
            parentId: this.props.post.id
        }))
        ReactDOM.findDOMNode(this.refs.author).value = ""
        ReactDOM.findDOMNode(this.refs.body).value = ""
    } 

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
               <Comment/>
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
