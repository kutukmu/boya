import React, { Component } from 'react'
import {Link} from "react-router-dom"

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                    <div className="homepage-inner">
                    <div className="header">
                    <div className="logo">
                            <div className="logo-icon">
                                <img src="./images/bird.png"/>
                            </div>
                            <div className="logo-name">
                                <h3>boya.</h3>
                        </div>
                        </div>
                        <div className="navbar">
                                <div className="navbar-nav">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/teamups">TeamUps</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/signup">Signup</Link></li>
                                    </ul>
                                </div>
                        </div>
                    </div>
                        
                        <div className="hero">
                            
                            <div className="content">
                                <div className="left">
                                <div className="left-content">
                                <h2>Teams are the smiles of the projects</h2>
                                    <p>In the job, managers create teams. In nature, you do it by yourself !!</p>
                                    <Link to="/signup">SignUp</Link>
                                </div>
                                    
                                </div>
                                <div className="right">
                                    <img src="./images/birds.png"/>
                                </div>
                            </div>
                            </div>
                            <div className="absolute-images">
                            
                                <img className="left-bottom-img" src="./images/left.png"/>
                                
                        </div>
                    </div>
            </div>
        )
    }
}

export default Homepage
