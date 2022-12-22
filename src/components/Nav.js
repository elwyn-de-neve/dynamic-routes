import React from 'react';
import { NavLink } from "react-router-dom";
import routes from '../routes/routes.json'

function Nav() {
    const navLink = ( { isActive } ) => isActive
        ? 'nav__link--active'
        : 'nav__link--default'

    return (
        <nav>
            <ul>
                { routes.map( ( route ) => {
                    return (
                        <li><NavLink className={ navLink } to={ route.path }>{ route.element }</NavLink></li>
                    )
                } ) }
            </ul>
        </nav>
    );
}

export default Nav;