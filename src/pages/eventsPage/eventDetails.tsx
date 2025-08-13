import React from 'react';
import { useParams } from 'react-router-dom';
import { getHomescreendata } from '../../api_calls/dashboardApi';
import { useEffect, useState } from 'react';

interface Event {
    id: string;
    eventName: string;
    date: string;
    time: string;
}

const EventsDetailsPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        const fetchEvent = async () => {
        const data = await getHomescreendata();
        const foundEvent = data.upcomingEvents.find((e) => e.id === id);
        setEvent(foundEvent || null);
        };

        fetchEvent();
    }, [id]);

    if (!event) {
        return <div>Event not found</div>;
    }

    return (
        <div>
        <h1>{event.eventName}</h1>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        </div>
    );
};

export default EventsDetailsPage;