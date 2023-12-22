import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <div className='container-fluid py-3 sticky-top' id='navbar-cf'>
                <div className='container'>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        {/* <a class="navbar-brand" href="/">Navbar</a> */}
                        <Link className='navbar-brand' to='/'>Navbar</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto justify-contect-end text-left">
                                <li class="nav-item active">
                                    <Link className='nav-link' to='/home'>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link className='nav-link' to='/about'>About</Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">
                                        Service
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="/">Action</a>
                                        <a class="dropdown-item" href="/">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="/">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link className='nav-link' to='/contact'>Contact</Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/"><i class="fa-solid fa-moon"></i></a>

                                </li>
                            </ul>

                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
