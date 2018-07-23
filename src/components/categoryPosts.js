import React, { Component }  from 'react'
import {fetchPostCategory} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'


class CategoryPosts extends Component {

    componentDidMount() {        
       this.props.dispatch(fetchPostCategory(this.props.match.params.category))
       console.log(this.props.match.params.category)
       console.log(this.props)

    }

    render() {
        return(
          <div className="container">
          <div className="row" >
              {this.props.posts.map(post => (
                  <Post key={post.id} post={post}  />
              ))}
            </div>
            <h1>test</h1>
            </div>

        )
    };
    
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        state: state
    }
}

export default connect(mapStateToProps)(CategoryPosts);
