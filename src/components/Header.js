import React from 'react'
import {Link} from 'react-router-dom';
import {FaCocktail} from 'react-icons/fa';

const Header = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link class="navbar-brand" to="/">
                        <FaCocktail color="yellow" size="30"/>
                         &nbsp;Cocktail Webite
                    </Link>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/help">Help</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header