import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import SingleEvent from '../SingleEvent/SingleEvent';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://obscure-coast-50402.herokuapp.com/events?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h5 style={{textAlign: 'center'}}>You have: {events.length} volunteer works</h5>
                <p style={{textAlign: 'center'}}> (note: refresh the page if your volunteer work not added or deleted yet) </p>
                {
                    events.map(event => <SingleEvent events={event}></SingleEvent>)
                }
            </div>
        </div>
    );
};

export default Events;