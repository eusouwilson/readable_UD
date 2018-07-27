import React,{Component} from 'react'
import {fetchAddPost, fetchAllCategories} from '../actions/actions'
import ReactDOM from "react-dom"
import {getUid} from "../utils/utils"
import {connect} from "react-redux";

class AddPost  extends Component {

    componentDidMount() {
        this.props.dispatch(fetchAllCategories())
    }

        title = ""
        body = "";
        author = "";
    addPost = () => {
        var index = ReactDOM.findDOMNode(this.refs.select).selectedIndex
        var category = ReactDOM.findDOMNode(this.refs.select).options[index].innerHTML
       this.props.dispatch(fetchAddPost({
            id: getUid(24, 16),
            timestamp: Date.now(),
            body: this.body,
            author: this.author,
            title: this.title,
            category: category

        }))
        console.log(getUid(24, 16))

    }
    render() {
        return(
            <form className="col-md-6 form-horizontal"  onSubmit={this.addPost}>
            <fieldset>
                <legend>Post a new article</legend>
                <div className="form-group ">
                    <label htmlFor="title">title：</label>
                    <input type="text" id="title" placeholder="Title" className="form-control input-md"
                           onChange={(e) => {
                               this.title = e.target.value
                           }} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="author">author：</label>
                    <input type="text" id="author" className="form-control input-md" placeholder="author" onChange={(e) => {
                        this.author = e.target.value
                    }} required/>
                </div>

                <div className="form-group">
                    <textarea id="text" className="form-control input-md" placeholder="text" onChange={(e) => {
                        this.body = e.target.value
                    }} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" ref="select" className="form-control">
                        {this.props.categories.map((category) => (
                            <option value="" key={category.path}>{category.name}</option>
                        ))}
                    </select>
                    <span className="form-caret"></span>
                </div>
                <button className="botaoEnviar" type="sumit" >send</button>
            </fieldset>
        </form>
        )

    }


}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        state: state
    }
}

export default connect(mapStateToProps)(AddPost);

