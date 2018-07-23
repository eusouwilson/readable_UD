import React, { Component }  from 'react'

class Comment extends Component {
    render() {
        return(
         <div key={this.props.comment.id}>
             <p>{this.props.comment.body}</p>
         </div>     
        
      )
        
    }; 
}
export default Comment;