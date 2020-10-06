import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import SingleEvent from '../SingleEvent/SingleEvent';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/events?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h6 style={{textAlign: 'center'}}>you have: {events.length} volunteer works</h6>
                {
                    events.map(event => <SingleEvent events={event}></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default Events;