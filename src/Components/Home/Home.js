import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [volunteer, setVolunteer] = useState([]);

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/bVgwFRGbFK?indent=2')
        .then(res => res.json())
        .then(data => 
            setVolunteer(data)
        )
    }, [])

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
                            <Link to="/register" style={{textDecoration:"none"}}>
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