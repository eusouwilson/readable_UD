import React, { Component }  from 'react'; 
import {fetchVoteComment} from '../actions/actions';
import {connect} from "react-redux";

class Comment extends Component {
    render() {
        return(
        <div key={this.props.comment.id}>
            <img src='https://www.fakenamegenerator.com/images/sil-male.png' alt="autor" className="usuario-avatar img-circle"/>
            <autor>&nbsp;{this.props.comment.author}</autor>
             <div className="texto-comentario" >{this.props.comment.body}</div>
             <button type="button" className="btn btn-default" aria-label="Like" onClick={() => (
                        this.props.dispatch(fetchVoteComment(this.props.comment.id, {option: "upVote"})))}>
                <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
            </button> 
            <button className="btn btn-default" type="button" disabled="disabled">
            {this.props.comment.voteScore}
            </button>                        
            <button type="button" className="btn btn-default" aria-label="DisLike" onClick={() => (
                        this.props.dispatch(fetchVoteComment(this.props.comment.id, {option: "downVote"})))}>
                <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
            </button> 
         </div>     
        
      )
        
    }; 
}
function mapStateToProps(state) {
    return {
        state: state,
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comment);