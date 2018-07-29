import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchComment, fetchEditComment} from "../actions/actions";

class EditComment extends Component {
    body = ""
    body = ""
    putComment = () => {
        this.props.dispatch(fetchEditComment(this.props.comment.id, {
            timestamp: Date.now(), body: this.body
        }))
    }

    componentDidMount() {
        this.props.dispatch(fetchComment(this.props.match.params.id))

    }

    render() {
        console.log(this.props)
        return (
            <form action="/" className="col-md-6 form-horizontal" onSubmit={this.putComment}>
                <fieldset>
                <legend>Edit a comment</legend>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <textarea className="form-control input-md" id="body" placeholder={this.props.comment.body}
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
    return {
        comment: state.comment,
    }
}

export default connect(mapStateToProps)(EditComment);