import React from 'react';
import {CartWidget} from './CartWidget';


const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">Thailand Ice Cream Rolls</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sabores</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><CartWidget/></a>
                    
                    </li>
                </ul>
            </div>
            </div>
        </nav>

    );
}
export default NavBar;