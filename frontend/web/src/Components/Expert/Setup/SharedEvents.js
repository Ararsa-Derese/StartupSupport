import React, { useState, useEffect } from 'react'; // Import useEffect here
import { Link } from 'react-router-dom';
import './SharedEvents.css';
const SharedEvents = () => {
    const [events, setEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(storedEvents);
        
        // Simulated API calls to fetch upcoming events and shared resources
        setUpcomingEvents([
          { id: 1, name: 'Event 1', enrolled: 120 },
          { id: 2, name: 'Event 2', enrolled: 80 },
        ]);
    }, []); // Added missing dependency array

    // Example handleJoinEvent function (needs implementation)
    const handleJoinEvent = (eventId) => {
        console.log(`Joining event ${eventId}`);
        // Implement event joining logic here
    };

    return (
        <div>
            <div className="events-section">
                <div className='event-header'>
                    <h3>Upcoming Events</h3> 
                    <Link className="setupNewEvent-btn" to="/setup-event">Setup New Event</Link>
                </div>
                <div className="upcoming-events-list">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className="upcoming-event-card">
                            {event.name} - {event.enrolled} enrolled
                        </div>
                    ))}
                </div>
                <div className="event-list">
                    {events.map((event) => (
                        <div key={event.id} className="event-card">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p><strong>Link:</strong> <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link}</a></p>
                            <p><strong>Type:</strong> {event.eventType}</p>
                            <button className="join-event-btn" onClick={() => handleJoinEvent(event.id)}>Join Event</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SharedEvents;