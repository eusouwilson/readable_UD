import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchComment, fetchEditComment} from "../actions/actions";
import { bindActionCreators } from 'redux';

class EditComment extends Component {
    body = this.props.comment.body
    putComment = () => {
        this.props.fetchEditComment(this.props.comment.id, {
            timestamp: Date.now(), body: this.body
        })
    }

    componentDidMount() {
        this.props.fetchComment(this.props.match.params.id)

    }

    render() {
        return (
            <form action={`/detail/${this.props.comment.parentId}`} className="col-md-6 form-horizontal" onSubmit={this.putComment}>
                <fieldset>
                <legend>Edit a comment</legend>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <input type='text' className="form-control input-md" id="body" defaultValue={this.props.comment.body}
                                  onChange={(e) => this.body = e.target.value}>
                        </input>
                    </div>
                </fieldset>
                <button className="botaoEnviar" type="submit">Enviar</button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
        comment: state.comment
})

const mapDispatchToProps = dispatch => {
    return {
         ...bindActionCreators({fetchComment, fetchEditComment}, dispatch)
 }
 }
export default connect(mapStateToProps, mapDispatchToProps)(EditComment);