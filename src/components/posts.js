import React, { Component }  from 'react'
import {fetchAllPosts} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import {sortByVoteScore, sortByTime} from "../utils/utils"
import Categories from './categories'


class Posts extends Component {
    constructor() {
        super();
        this.state = {
            StateRefresh: 0,
        }
    }

    category = ""
    sorted = ""
    componentDidMount() {        
       this.props.dispatch(fetchAllPosts())
    }
  
    sortByCategories = () => {
        
    }

    render() {
        
        return(
          <div className="container">
          <div>
              Sort By: <button type="button" className="btn btn-default" aria-label="Like"  onClick={(e) => {
                                               sortByTime(this.props.posts)
                                               this.setState({StateRefresh: this.state.StateRefresh + 1})
                                           }}>
              Date
              </button> 
              <button type="button" className="btn btn-default" aria-label="DisLike"  onClick={(e) => {
                                               sortByVoteScore(this.props.posts)
                                               this.setState({StateRefresh: this.state.StateRefresh + 1})
                                           }}>
              Score
              </button> 
        
          </div>
            <div className="row" >
                <div className="col-md-8">
                    {this.props.posts.filter(post => post.deleted === false ).map(post => (
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
        state: state,
        comments: state.comments

    }
}

export default connect(mapStateToProps)(Posts);
