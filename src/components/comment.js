import React, { Component }  from 'react' 

class Comment extends Component {
    render() {
        return(
        <div key={this.props.comment.id}>
            <img src='https://www.fakenamegenerator.com/images/sil-male.png' alt="autor" className="usuario-avatar img-circle"/>
            <autor>&nbsp;{this.props.comment.author}</autor>
             <div className="texto-comentario" >{this.props.comment.body}</div>
             <button type="button" className="btn btn-default" aria-label="Like">
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
            </button> 
            <button className="btn btn-default" type="button" disabled="disabled">
            {this.props.comment.voteScore}
            </button>                        
            <button type="button" className="btn btn-default" aria-label="DisLike">
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
            </button> 
         </div>     
        
      )
        
    }; 
}
export default Comment;