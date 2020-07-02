import React from 'react';
import {NavLink} from 'react-router-dom';

function NavList(){
    return(
        <div>
            { <nav>
            <ul>
                <li>
                  <NavLink to='/' exact>  Home Page </NavLink>
                </li>
                <li>
                   <NavLink to='/TaskHooks'> TaskList</NavLink>
                </li>
                <li>
                    <NavLink to='./Post'>Posts</NavLink>
                </li>
                <li>
                     <NavLink to='./Todo'>Todo</NavLink>
                </li>
            </ul>
            </nav> }
        </div>
    );
}

export default NavList;