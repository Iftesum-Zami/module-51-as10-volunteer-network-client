import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                color: 'black',
                height:'50px',
                padding:"5px 20px"  
            }}>
                <div>
                        <Link to="/home"> 
                            <img style={{height:"40px"}} src={logo} alt=""/>
                        </Link>
                </div>
            
                <div className="header-right" style={{display:"flex", alignItems:"center"}}>

                    <Link to="/home" style={{textDecoration:"none", color: 'black', marginLeft: '10px'}}>
                        <p>Home</p>
                    </Link>
                    <Link to="/home" style={{textDecoration:"none", color: 'black', marginLeft: '10px'}}>
                        <p>Donation</p>
                    </Link>
                    <Link to="/events" style={{textDecoration:"none", color: 'black', marginLeft: '10px'}}>
                        <p>Events</p>
                    </Link>
                    <Link to="/home" style={{textDecoration:"none", color: 'black', marginLeft: '10px'}}>
                        <p>Blog</p>
                    </Link>

                    { 
                        loggedInUser.name? 
                            <>
                                <p style={{marginLeft: '10px', color: 'orange'}}>{loggedInUser.name}</p>
                            </>
                        : 
                        <>
                            <Link to="/register" style={{textDecoration:"none", marginLeft: '20px'}}>
                                <button type="button" class="btn btn-primary">Register</button>
                            </Link>
                            
                            <Link to="/admin" style={{textDecoration:"none", marginLeft: '10px'}}>
                                <button type="button" class="btn btn-dark">Admin</button>
                            </Link>
                        </>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;