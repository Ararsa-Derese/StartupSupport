import React, { useState, useEffect } from 'react';
import './SetupEvent.css';
import Events from '../Events/Events';
const SetupEvent = () => {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    link: '',
    eventType: '',
  });

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const { title, description, date, time, location, link, eventType } = eventDetails;

  const onChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!title || !description || !date || !time || !location || !link || !eventType) {
      setError('All fields are required.');
      return;
    }
    setLoading(true);

    // Simulating an API call
    setTimeout(() => {
      const newEvent = {
        id: Date.now(),
        ...eventDetails,
      };
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem('events', JSON.stringify(updatedEvents));
      setLoading(false);
      setEventDetails({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        link: '',
        eventType: '',
      });
    }, 1000);
  };

  return (
    <div className="setup-event-container">
      <h2>Setup Event</h2>
      <form className="setup-event-form" onSubmit={onSubmit}>
        <div className="event-form-group">
          
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Event Title"
            required
          />
        </div>
        <div className="event-form-group">
         
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            placeholder="Event Description"
            required
          ></textarea>
        </div>
        <div className="event-form-group">
          
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={onChange}
            required
          />
        </div>
        <div className="event-form-group">
       
          <input
            type="time"
            id="time"
            name="time"
            value={time}
            onChange={onChange}
            required
          />
        </div>
        <div className="event-form-group">
         
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={onChange}
            placeholder="Event Location"
            required
          />
        </div>
        <div className="event-form-group">
         
          <input
            type="text"
            id="link"
            name="link"
            value={link}
            onChange={onChange}
            placeholder="Meeting Link"
            required
          />
        </div>
        <div className="event-form-group">
          
          <select
            id="eventType"
            name="eventType"
            value={eventType}
            onChange={onChange}
            required
          >
            <option value="">Select event type</option>
            <option value="Webinar">Webinar</option>
            <option value="Workshop">Workshop</option>
            <option value="Meetup">Meetup</option>
            <option value="Conference">Conference</option>
            {/* Add more event types as needed */}
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Setting Up...' : 'Setup Event'}
        </button>
      </form>
      <div className="upcoming-events-list">
        <h3>Upcoming Events</h3>
        
        {events.length === 0 && <p>No upcoming events yet.</p>}
        <ul>
        
          {events.map((event) => (
            <li key={event.id}>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Link:</strong> {event.link}</p>
              <p><strong>Type:</strong> {event.eventType}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetupEvent;
