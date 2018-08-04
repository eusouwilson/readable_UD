import React, { Component }  from 'react'
import {fetchPostCategory} from "../actions/actions"
import {connect} from "react-redux"
import Post from './post'
import Categories from './categories'
import { bindActionCreators } from 'redux';
import Error from './error';



class CategoryPosts extends Component {
    constructor() {
        super();
        this.state = {
            StateRefresh: 0,
        }
    }

    componentDidMount() { 
     this.props.fetchPostCategory(this.props.match.params.category)
    } 
    componentDidUpdate(prevProps) {
         if (this.props.match.params.category !== prevProps.match.params.category) {
             this.props.fetchPostCategory(this.props.match.params.category)
        }
      } 

    render() {
        if (this.props.error) {
            return (
                <Error/>
            )
        } else
        return(
            
          <div className="container">
             <div>
              Sort By: <button type="button" className="btn btn-default" aria-label="Like"  onClick={(e) => {
                                                this.props.fetchPostCategory(this.props.match.params.category, 'byDate');
                                                this.setState({StateRefresh: this.state.StateRefresh + 1})
                                           }}>
              Date
              </button> 
              <button type="button" className="btn btn-default" aria-label="DisLike"  onClick={(e) => {
                                                this.props.fetchPostCategory(this.props.match.params.category, 'score');
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
        state: state
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({fetchPostCategory}, dispatch)

 })
  
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPosts);
