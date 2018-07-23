import React, { Component }  from 'react'
import {fetchAllCategories} from "../actions/actions"
import {connect} from "react-redux"
import {Link} from 'react-router-dom'

class Categories extends Component {
    
    componentDidMount() {
        this.props.dispatch(fetchAllCategories())
    }
 
    render() {
        return(
            <div className="container">
                <div className="jumbotron"> 
                    <ul className="list-group">
                    <h2>Categories</h2>
                    {this.props.categories.map((category) => {
                        return <li className="list-group-item" key={category.path}>
                        <Link to={{
                                pathname: `/${category.path}`,
                                state: {fromCategory :true}
                            }}>
                        {category.name}
                        </Link>
                        </li>
                    })}
                    </ul>
                </div>
            </div>
        )
        
    }; 
}
function mapStateToProps(state) {
    return {
        categories: state.categories,
        state: state
    }
}

export default connect(mapStateToProps)(Categories);
