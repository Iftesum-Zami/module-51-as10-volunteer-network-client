import React from 'react';

const SingleEvent = (props) => {
    const {name, email, url, title, date, id, _id} = props.events;

    const eventStyle = {
        backgroundColor: 'lightgray',
        borderRadius: '10px', 
        padding: '15px',
        margin: '10px',
    }

    const deleteEvent = (id, event) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        // .then(result => {
        //     if (result) {
        //         event.target.parentNode.style.display = 'none'
        //     }
        // })
    }

    return (
        <div style={eventStyle}>
            <div className="d-flex flex-row justify-content-between">
                <div className="col-md-3">
                    <img src={url} alt=""/>
                </div>
                <div className="col-md-9">
                    <h3>{title}</h3>
                    <p>Name: {name}</p>
                    <p>Date: {new Date(date).toDateString('dd/MM/yyyy')}</p>
                    <button onClick={() => deleteEvent(_id,) }
                        type="button"
                        className="btn btn-info">
                            Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;