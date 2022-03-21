import React from 'react';
import {Link} from 'react-router-dom';

import "./style/Navigation.css";

function Nav(){

    return(
        <nav className="nav">
            
            <ul className="navbar_links">

                <li className="navbar_item">
                    <Link className="navbar_link" to="/accueil">Accueil</Link>
                </li>

                <li className="navbar_item">
                    <Link className="navbar_link" to="/a-propos">A propos</Link>
                </li>


                <li className="navbar_item">
                    <Link className="navbar_link" to="/list-etudiants">CRUD Operation</Link>
                </li>

                <li className="navbar_item">
                    <Link className="navbar_link" to="/countries">Countries</Link>
                </li>

            </ul>

        </nav>

    );
}

export default Nav;