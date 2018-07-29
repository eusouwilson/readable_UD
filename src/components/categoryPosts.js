import React, { Component }  from 'react'
import {fetchPostCategory} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import Categories from './categories'
import {sortByVoteScore, sortByTime} from "../utils/utils"



class CategoryPosts extends Component {
    constructor() {
        super();
        this.state = {
            StateRefresh: 0,
        }
    }

    componentDidMount() { 
     this.props.dispatch(fetchPostCategory(this.props.match.params.category))
     console.log(this.props)

    } 
    componentDidUpdate(prevProps) {
         if (this.props.match.params.category !== prevProps.match.params.category) {
             this.props.dispatch(fetchPostCategory(this.props.match.params.category))
        }
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
