import React, {Component} from 'react';
import {fetchAddComment} from "../actions/actions"
import {getUid} from "../utils/utils"
import {connect} from "react-redux";

class PostComment extends Component {


body = "";
author = "";
 addComment = () => {
    this.props.dispatch(fetchAddComment({
        id: getUid(24, 16),
        timestamp: Date.now(),
        body: this.body,
        author: this.author,
        parentId: this.props.post.id
    }))
}

render() {

    return (    
    <form className="form-inline" onSubmit={this.addComment} action={`/post/${this.props.post.id}`}>
    <div className="form-group">
        <input type="text" className="comentarios-add-author" id="name" minLength="3" placeholder="Name"
                onChange={(e) => {
                    this.author = e.target.value
                }} required/>
        </div>

        <div className="form-group ">
            <textarea rows="0" cols="0" id="text" placeholder="Your Comment" className="comentarios-add-texto"  onChange={(e) => {
                this.body = e.target.value
            }} required/>
        </div>

        <button className="botaoEnviar" type="submit">Send</button>

    </form>

    )
    }
}

function mapStateToProps(state) {

    return {
        posts: state.posts,
        state: state
    }
}


export default connect(mapStateToProps)(PostComment);