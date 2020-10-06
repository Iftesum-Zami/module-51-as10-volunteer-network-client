import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [volunteer, setVolunteer] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://obscure-coast-50402.herokuapp.com/allVolunteerWork')
        .then(res => res.json())
        .then(data => {
            setVolunteer(data)
        })
    }, [])

    const handleUser = (singleWork) => {
        const volunteerWork = {...loggedInUser, ...singleWork};
        setLoggedInUser(volunteerWork)
    }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h3 style={{textAlign: 'center'}}>I GROW BY HELPING PEOPLE IN NEED.</h3>
                <div style={{marginBottom: '20px',}} className="d-flex justify-content-center">
                    <div>
                        <form class="form-inline">
                            <div class="form-group mx-sm-3 mb-2">
                                <label for="inputPassword2" class="sr-only">search...</label>
                                <input style={{width: '400px'}} type="text" class="form-control" id="inputPassword2" placeholder="Search"/>
                            </div>
                            <button type="submit" class="btn btn-primary mb-2">Search</button>
                        </form>
                    </div>
                </div>
                
                <div style={{display: 'flex'}} className="row">
                    {
                        volunteer.map(work => 
                            <Link onClick={() => handleUser(work)} to={loggedInUser.name? "/register" : "/home"} style={{textDecoration:"none"}}>
                                <Volunteer key={work.id} work={work}></Volunteer>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;