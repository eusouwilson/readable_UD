import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost, fetchEditPost} from "../actions/actions";

class EditPost extends Component {
    title = ""
    body = ""
    putPost = () => {
        this.props.dispatch(fetchEditPost(this.props.post.id,{title:this.title, body:this.body}))
    }

    componentDidMount() {
        this.props.dispatch(fetchPost(this.props.match.params.id))
        console.log(this.props.match)
    }

    render() {
        console.log(this.props)
        return (
            <form action="/" className="col-md-6 form-horizontal" onSubmit={this.putPost}>
                <fieldset>
                <legend>Edit a article</legend>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" placeholder={this.props.post.title} className="form-control input-md"
                               onChange={(e) => this.title = e.target.value}
                               required/>
                        <label htmlFor="body">Body:</label>
                        <textarea className="form-control input-md" id="body" placeholder={this.props.post.body}
                                  onChange={(e) => this.body = e.target.value}>
                        </textarea>
                    </div>
                </fieldset>
                <button className="botaoEnviar" type="submit">Enviar</button>
            </form>
        );
    }
}

function mapStateToProps(state, props) {
    return {post:state.posts}
}

export default connect(mapStateToProps)(EditPost);