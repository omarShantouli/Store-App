// NavBar file 
import React from 'react';
import { navStruct } from '../utils';

class NavBar extends React.Component{

    constructor(props)
    {
        super(props)
        this.state = {
          navStructState : navStruct
        }
    }

    onTabClicked(tabIdx){
        let _navStructState = JSON.parse(JSON.stringify(this.state.navStructState)); //[...this.state.navStructState]  

        _navStructState = _navStructState.map((tab, idx)=>{
            tab.isActive = (idx === tabIdx)

            return tab;
        })

        this.setState({
          navStructState : _navStructState
        })
    }

    render(){
        return(

            <div className="navbar navbar-expand-md bg-primary navbar-dark ps-5">
              
              <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target='#mainNavBar'>
                <span className="navbar-toggler-icon"></span>
              </button>
      
              <div className="collapse navbar-collapse" id="mainNavBar">
                <ul className="navbar-nav">

                  {
                    this.state.navStructState.map((tab, idx) => {
                      return <li key={idx} className="nav-item">
                        <button 
                        className={`btn nav-link ${tab.isActive?"active":null}`}
                        onClick={this.onTabClicked.bind(this, idx)}
                        >{tab.name}
                        </button>
                        </li>
                    })
                  }

                </ul>
      
              </div>
      
            </div>
        )
        }
}

export default NavBar;