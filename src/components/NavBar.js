import React from 'react';
import {Link} from 'react-router-dom';
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
                    <Link to={`/category/1`}>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Frutas del bosque</a>
                    </li>
                    </Link>
                    <Link to={`/category/2`}>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Frutas tropicales</a>
                    </li>
                    </Link>
                    <Link to={`/category/3`}>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">otros</a>
                    </li>
                    </Link>
                    <Link to="/cart">
                    <button className='btn btn-primary'>
                     <a>       
                    <CartWidget contador={4} />  
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