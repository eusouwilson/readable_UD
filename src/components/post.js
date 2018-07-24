import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import { timeStampToString} from '../utils/utils';
import '../App.css';
class Post extends Component {

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

            <button type="button" className="btn btn-default" aria-label="Like">
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
            </button> 
            <button className="btn btn-default" type="button" disabled="disabled">
            Score {this.props.post.voteScore}
            </button>                        
            <button type="button" className="btn btn-default" aria-label="DisLike">
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
            </button> 
            <h4>{this.props.post.commentCount} - COMMENTS</h4>
            <hr/>  
            </div>
            
        </div>
        
      )                        
    }; 
}
export default Post;