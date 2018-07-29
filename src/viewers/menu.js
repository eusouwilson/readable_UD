
import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class  Menu extends Component{
      render() {
        return  (   
            <nav className='navbar navbar-inverse bg-inverse'>
             <div className='container'>
                 <div className='navbar-header'>
                     <a className='navbar-brand' href='/'>
                         <i className='fa fa-home'></i> HOME
                    </a> 
                </div>
                 <div id='navbar' className='navbar-collapse collapse'>
                     <ul className="nav navbar-nav">
                         <li><a href='/posts'>All Posts</a></li>
                     </ul>
                     <ul className="nav navbar-nav navbar-right">
                     <li>
                     <Link to={{
                                pathname: '/post/add',
                            }}>
                         <button type="button" className="btn btn-danger navbar-btn">
                         <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                          New Post
                        </button>
                    </Link>
                     </li>
                     </ul>
                 </div>
             </div>
           </nav> 
        )
    }
}

export default Menu