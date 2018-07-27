import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import { timeStampToString} from '../utils/utils';
import {fetchVotePost, fetchDeletePost} from '../actions/actions'
import '../App.css';
import {connect} from "react-redux";
import PostComment from "./addComment"
class Post extends Component {
    deletePost = () => {
        this.props.dispatch(fetchDeletePost(this.props.post.id))
    }

    render() {
        return(  
         <div className="mc.body" key={this.props.post.id}>
            <div  className="head_title">
                <Link to={{
                            pathname: `/${this.props.post.category}/${this.props.post.id}`,
                            }}>
                {this.props.post.title}            
                </Link>
            </div>
            <div className="data_category">
            <b>Date: </b> {timeStampToString(this.props.post.timestamp)} <b> - Author: </b>{this.props.post.author}<b> - Category</b> - 
                <Link to={{
                            pathname: `/${this.props.post.category}`,       
                            }}>
                        &nbsp;{this.props.post.category}
                </Link>
            </div>
            <div className="text-container">
            <p>{this.props.post.body}</p>

            <button type="button" className="btn btn-default" aria-label="Like" onClick={() => (
                this.props.dispatch(fetchVotePost(this.props.post.id, {option: "upVote"}))
            )}>
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
            </button> 
            <button className="btn btn-default" type="button" disabled="disabled">
            Score {this.props.post.voteScore}
            </button>                        
            <button type="button" className="btn btn-default" aria-label="DisLike" onClick={() => (
                this.props.dispatch(fetchVotePost(this.props.post.id, {option: "downVote"}))
            )}>
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
            </button> 
            <Link to={{
                            pathname: `/post/edit/${this.props.post.id}`,       
                            }}>
            <button type="button" className="btn btn-default" aria-label="Edit">
                <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </button> 
            </Link>
            <button type="button" className="btn btn-default" aria-label="DisLike" onClick={this.deletePost}>
                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
            </button> 
            
            <h4>{this.props.post.commentCount} - COMMENTS</h4>
            <PostComment post={this.props.post} /> 
            <hr/> 
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


export default connect(mapStateToProps)(Post);
