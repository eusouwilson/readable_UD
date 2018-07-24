import React, { Component }  from 'react'
import {Link} from 'react-router-dom'
import { timeStampToString} from '../utils/utils';

class Post extends Component {

    render() {
        return(  
         <div className="col-md-6" key={this.props.post.id}>
          <div  className="panel panel-default">
              <div className="panel-heading">
              <div className="row">
              <div className="col-md-6" >
            
              <Link to={{
                              pathname: `/${this.props.post.category}/${this.props.post.id}`,
                              
                          }}>
              {this.props.post.title}            
              </Link>

              </div>
              <div className="col-md-6">
              <b>Category</b> - 
              <Link to={{
                              pathname: `/${this.props.post.category}`,
                               
                          }}>
                       &nbsp;{this.props.post.category}
              </Link>
              </div>
              </div>
              </div>
              <div className="panel-body">
              <p>{this.props.post.body}</p>
              </div>
              <div className="panel-footer">
                  <div className="row">
                      <div className="col-md-6">
                      <button type="button" className="btn btn-default" aria-label="Like">
                          <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
                      </button> 
                      <button className="btn btn-default" type="button" disabled="disabled">
                      Score {this.props.post.voteScore}
                      </button>                        
                      <button type="button" className="btn btn-default" aria-label="DisLike">
                          <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
                      </button>             

                      </div>
                      <div className="col-md-6"> <b>Author:</b> @{this.props.post.author} - <b>Comments:</b> {this.props.post.commentCount} -  <span> <b>Date: </b>{timeStampToString(this.props.post.timestamp)}</span></div>
                  </div>
              </div>
          </div>
          </div>
          
      )
        
    }; 
}
export default Post;