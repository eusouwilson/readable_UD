import React, { Component }  from 'react'
import {fetchPostCategory} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import Categories from './categories'


class CategoryPosts extends Component {

    componentDidMount() { 
     this.props.dispatch(fetchPostCategory(this.props.match.params.category))
     console.log(this.props.match)
    }


    render() {
        return(
          <div className="container">
            <div className="row" >
            <div className="col-md-8">
                {this.props.posts.map(post => (
                    <Post key={post.id} post={post}  />
                ))}
                </div>
                <div className="col-md-4">
                    <Categories/>
                </div>    
            </div>
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
