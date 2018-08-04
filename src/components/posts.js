import React, { Component }  from 'react'
import {fetchAllPosts} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import Categories from './categories'
import { bindActionCreators } from 'redux';
import Error from './error';



class Posts extends Component {
    constructor() {
        super();
        this.state = {
            StateRefresh: 0
        }
    }

    componentDidMount() {        
        this.props.fetchAllPosts();
    }
    render() { 
        return(
          <div className="container">
          <div>
              Sort By: <button type="button" className="btn btn-default" aria-label="Like"  onClick={(e) => {
                                                this.props.fetchAllPosts('byDate');
                                               this.setState({StateRefresh: this.state.StateRefresh + 1})
                                           }}>
              Date
              </button> 
              <button type="button" className="btn btn-default" aria-label="DisLike"  onClick={(e) => {
                                                this.props.fetchAllPosts('score');
                                                this.setState({StateRefresh: this.state.StateRefresh + 1})
                                           }}>
              Score
              </button> 
        
          </div>
            <div className="row" >
                <div className="col-md-8">

                    {this.props.posts.length ? this.props.posts.map(post => (
                        <Post key={post.id} post={post}  />
                    )): <Error/>}
                </div>
                <div className="col-md-4">
                <Categories/>
                </div>
            </div>
        </div>

        )
    };
    
}



const mapStateToProps = state => ({
    posts: state.posts,
    state: state,
    comments: state.comments,
  })
  


const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({fetchAllPosts}, dispatch)

  })


export default connect(mapStateToProps, mapDispatchToProps)(Posts);
