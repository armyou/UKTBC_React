/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react';
import { Carousel, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import slide1 from "../../../assets/dashboard/slide1.png";
import slide2 from "../../../assets/dashboard/slide2.png";
import { getHomescreendata } from '../../../api_calls/dashboardApi';
import { useNavigate } from 'react-router-dom';

interface Event {
  id: string;
  eventName: string;
  date: string;
  time: string;
}

interface Project {
  id: string;
  projectName: string;
  location: string;
  budget: string;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const carouselRef = useRef<any>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [upcomingProjects, setUpcomingProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchHomeScreenData();
  }, []);

  const fetchHomeScreenData = async () => {
    const response = await getHomescreendata();
    setUpcomingEvents(response.upcomingEvents);
    setUpcomingProjects(response.upcomingProjects);
  };

  return (
    <div className="dashboard col-sm-12" style={{ position: 'relative' }}>
      {/* Carousel */}
      <Carousel autoplay ref={carouselRef} dots={true} effect="fade">
        <div>
          <img src={slide1} alt="Slide 1" className="carousel-img" />
        </div>
        <div>
          <img src={slide2} alt="Slide 2" className="carousel-img" />
        </div>
      </Carousel>
      <Button
        shape="circle"
        icon={<LeftOutlined />}
        className="carousel-btn prev-btn"
        onClick={() => carouselRef.current?.prev()}
      />
      <Button
        shape="circle"
        icon={<RightOutlined />}
        className="carousel-btn next-btn"
        onClick={() => carouselRef.current?.next()}
      />

      {/* Upcoming Events */}
      <div className="upcoming-events">
        <p className="heading">Upcoming Events</p>
        <div className="event-cards-list">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card" onClick={() => navigate(`/event/${event.id}`)}>
              <p className="card-title">{event.eventName}</p>
              <p className="paragraph">{event.date}</p>
              <p className="paragraph">{event.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Projects */}
      <div className="upcoming-projects col-sm-12">
        <p className="heading">Upcoming Projects</p>
        <div className="event-cards-list col-sm-12">
          {upcomingProjects.map((project) => (
            <div key={project.id} className="event-card">
              <p className="card-title">{project.projectName}</p>
              <p className="paragraph">{project.location}</p>
              <p className="paragraph">{project.budget}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
