import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchPost, fetchEditPost} from "../actions/actions";
import { bindActionCreators } from 'redux';
class EditPost extends Component {
    
   title=this.props.posts[0].title;
    body=this.props.posts[0].body

   putPost = () => {
      this.props.fetchEditPost(this.props.posts[0].id,{title:this.title, body:this.body})
    }

    componentDidMount() {
    this.props.fetchPost(this.props.match.params.id)

    }
   
    render() {
        return (
            <form action="/" className="col-md-6 form-horizontal" onSubmit={this.putPost}>
            <fieldset>
            <legend>Edit a article</legend>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" defaultValue={this.props.posts[0].title} className="form-control input-md"
                             onChange={(e) => this.title = e.target.value} required/>
                    <label htmlFor="body">Body:</label>
                    <input  type='textarea'className="form-control input-md" id="body" defaultValue={this.props.posts[0].body}
                                  onChange={(e) => this.body = e.target.value}>
                    </input>
                </div>
            </fieldset>
            <button className="botaoEnviar" type="submit">Enviar</button>
        </form>
        );
    }
}

const mapStateToProps = state =>({
    posts:state.posts,
})

const mapDispatchToProps = dispatch => {
    return {
         ...bindActionCreators({fetchEditPost, fetchPost}, dispatch)
 }
 }

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);