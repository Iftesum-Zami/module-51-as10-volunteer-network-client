import React, { useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Header></Header>
            <div className="container">
                <h5>hello, {loggedInUser.name}</h5>
            </div>
        </div>
    );
};

export default Events;