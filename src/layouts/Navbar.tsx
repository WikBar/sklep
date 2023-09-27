import React from "react";
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar(){
    return (


        <nav className="navbar navbar-expand-lg  navbar-dark">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">Harley Parts</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        <li className="nav-item mx-3 dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >

                                Części oryginalne
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Silnik</a></li>
                                <li><a className="dropdown-item" href="#">Rama</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Akcesoria</a></li>
                            </ul>
                        </li>

                        <li className="nav-item"><a className="nav-link" href="#">Warsztat</a></li>

                    </ul>

                    <ul className="navbar-nav d-flex flex-row me-1">
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#"><i className="fas fa-shopping-cart"></i></a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>

                    <form className="w-auto">
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Type query"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
