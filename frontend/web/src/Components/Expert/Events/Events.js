import React, { useEffect, useState } from 'react';
import './Events.css';
import training from '../../Assets/training.jpg';
import networking from '../../Assets/networking.jpg';
import workshop from '../../Assets/workshop.jpg';
import conference from '../../Assets/conference.jpg';
import Webinar from '../../Assets/webinar.jpg';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  // Function to handle joining an event
  const handleJoinEvent = (eventId) => {
    console.log(`Joining event with ID ${eventId}`);
    // Implement join event logic here (e.g., redirect to event details page)
  };

  return (
    <div className="events-container">
      {/* Intro Section */}
      <div className="intro">
        <h1>Welcome to Our Events Page!</h1>
        <p>Discover the latest events, workshops, and conferences designed to enhance your skills and connect you with industry leaders and innovators.</p>
      </div>
      {/* End of Intro Section */}
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.length === 0 && <p>No upcoming events.</p>}
        {events.map((event) => (
          <div key={event.id} className="event-card">
          <img src={conference} alt="Business Conference" />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Link:</strong> <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link}</a></p>
            <p><strong>Type:</strong> {event.eventType}</p>
            <button className="btn btn-primary" onClick={() => handleJoinEvent(event.id)}>Join Event</button>
          </div>
        ))}
        
        {/* Static example event cards */}
        <h2>Recent Events</h2>
        <div className='static-cards'>
        <div className="event-card">
          <img src={training} alt="Training Entrepreneur" />
          <h3>Training Entrepreneur</h3>
          <p>Expert guidance on starting a business, key steps, and more.</p>
          <p><strong>Date:</strong> August 5, 2024</p>
          <p><strong>Time:</strong> 10:00 AM</p>
          <p><strong>Location:</strong> In-person</p>
          <p><strong>Link:</strong> <a href="#example-link">Join Now</a></p>
          <p><strong>Type:</strong> Workshop</p>
          <button className="btn btn-primary">Join Event</button>
        </div>

        <div className="event-card">
          <img src={networking} alt="Networking Event" />
          <h3>Networking Mixer</h3>
          <p>Connect with like-minded professionals and expand your network.</p>
          <p><strong>Date:</strong> July 25, 2024</p>
          <p><strong>Time:</strong> 6:00 PM</p>
          <p><strong>Location:</strong> Online</p>
          <p><strong>Link:</strong> <a href="#example-link">Register Now</a></p>
          <p><strong>Type:</strong> Networking</p>
          <button className="btn btn-primary">Join Event</button>
        </div>

        <div className="event-card">
          <img src={workshop} alt="Marketing Workshop" />
          <h3>Digital Marketing Bootcamp</h3>
          <p>Learn essential digital marketing strategies and tools.</p>
          <p><strong>Date:</strong> September 10, 2024</p>
          <p><strong>Time:</strong> 9:00 AM</p>
          <p><strong>Location:</strong> Hybrid (In-person and Online)</p>
          <p><strong>Link:</strong> <a href="#example-link">Enroll Now</a></p>
          <p><strong>Type:</strong> Workshop</p>
          <button className="btn btn-primary">Join Event</button>
        </div>

        <div className="event-card">
          <img src={conference} alt="Business Conference" />
          <h3>Annual Business Conference</h3>
          <p>Industry leaders and experts sharing insights.</p>
          <p><strong>Date:</strong> October 15-17, 2024</p>
          <p><strong>Time:</strong> Varies</p>
          <p><strong>Location:</strong> City Convention Center</p>
          <p><strong>Link:</strong> <a href="#example-link">Register Now</a></p>
          <p><strong>Type:</strong> Conference</p>
          <button className="btn btn-primary">Learn More</button>
        </div>

        <div className="event-card">
          <img src={Webinar} alt="Webinar: Financial Planning" />
          <h3>Master Your Finances</h3>
          <p>Expert advice on budgeting, saving, and investing.</p>
          <p><strong>Date:</strong> July 20, 2024</p>
          <p><strong>Time:</strong> 2:00 PM</p>
          <p><strong>Location:</strong> Online</p>
          <p><strong>Link:</strong> <a href="#example-link">Register Now</a></p>
          <p><strong>Type:</strong> Webinar</p>
          <button className="btn btn-primary">Join Webinar</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Events;