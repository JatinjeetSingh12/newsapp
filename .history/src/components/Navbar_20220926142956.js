import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className={`navbar fixed-top navbar-expand-lg navbar-dark bg-dark`} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">myNews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>
            </ul>


          </div>
          <div className={`form-check form-switch text-${this.props.mode === "dark" ? "light" : "light"}`}>
            <input className="form-check-input" onClick={this.props.togglemode} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" hrmlfor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </nav>
    </>
  )

}