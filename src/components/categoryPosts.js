import React, { Component }  from 'react'
import {fetchPostCategory} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'


class CategoryPosts extends Component {

    componentDidMount() { 
    //const mapDispatchToProps = this.props.dispatch(fetchPostCategory(this.props.match.params.category))

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
            </div>

        )
    };
    
}

function mapDispatchToProps(state) {
    return {
        posts: state.posts,
        state: state
    }
}

  
export default connect(mapDispatchToProps)(CategoryPosts);
