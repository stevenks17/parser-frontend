import React from 'react'


// import NavLink to enable routing by using browser url updates
import { NavLink } from 'react-router-dom'

//bootstrap styling
import Button from 'react-bootstrap/Button'

// render title and 2 navlinks to traverse
const NavBar = () => {
    return (
        <div style= {{paddingBottom: '15px', marginBottom: '15px'}}>
            <h1 className="header" >Parser Dashboard</h1>

            <NavLink
                style={{marginRight: '10px' }}
                to="/">
                    <Button variant="dark"> Data Dashboard</Button>
            </NavLink>


            <NavLink
                style={{marginRight: '10px'}}
                to="/graphs/new">
                    <Button variant="dark"> Add a new data source</Button>
            </NavLink>

          
        </div>
       

        
    )
}

export default NavBar

