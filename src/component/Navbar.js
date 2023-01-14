import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
export default function Navbar(props) {
 
    return (
        <div className="App" style={{border:'2px solid black'}}>
            <div className={`text-warning`}>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} `} >
                <div className="container-fluid">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className={`navbar-brand text-${props.notmode}`} style={{a:{textDecoration:'none'}}}>{props.title}</div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                            <Link to="/textform"  style={{ textDecoration: 'none' }}>
                                <div className={`nav-link active text-${props.notmode}`} aria-current="page" >Features</div>
                               </Link>
                            </li> */}
                            <li className={`nav-item text-${props.notmode}`}>
                            <Link to="/about"  style={{ textDecoration: 'none' }}>
                                <div className={`nav-link text-${props.notmode} `}>{props.abouttext}</div>
                            </Link>
                            </li>

                        </ul>

                    </div>
                    <div className={`form-check form-switch text-${props.notmode}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">{`${props.mode}`} Mode</label>
                </div>
                </div>
                


            </nav>
            </div>



        </div>
    )
}

Navbar.propTypes = { title: PropTypes.string.isRequired, abouttext: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Text-Utils", abouttext: "About" };