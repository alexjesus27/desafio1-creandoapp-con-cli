import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {CartWidget} from './CartWidget';



const NavBar = (helado) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            
            <Link to="/">
            <h2 className='navbar-brand'>Thailand Ice Cream Rolls</h2>
            </Link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <NavLink to="/category/bosque">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Frutas del bosque</a>
                    </li>
                    </NavLink>
                    <NavLink to="/category/tropical">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Frutas tropicales</a>
                    </li>
                    </NavLink>
                    <NavLink to="/category/otros">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">otros</a>
                    </li>
                    </NavLink>
                    <Link to="/cart">
                    <button className='btn btn-primary'>
                     <a>       
                    <CartWidget/>  
                    </a>
                    </button>
                    </Link>
                </ul>
            </div>
            </div>
        </nav>

    );
}
export default NavBar;