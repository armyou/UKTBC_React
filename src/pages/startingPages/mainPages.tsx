import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/staticSite/header';
import Dashboard from '../staticPages/dashboardPage/dashboard';
import About from '../staticPages/aboutPage/about';
import Services from '../staticPages/servicesPages/services';
import Events from '../staticPages/eventsPage/events';
import Projects from '../staticPages/projectsPage/projects';
import Reports from '../staticPages/reportsPage/reports';
import Contact from '../staticPages/contactPage/contact';
import DonateNow from '../staticPages/donationsPage/donateNow';
import EventsDetailsPage from '../staticPages/eventsPage/eventDetails';
import Footer from '../../components/staticSite/footer';

const MainPages: React.FC = () => {
  return (
    <div className="main-page">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate-now" element={<DonateNow />} />
        <Route path="/event/:id" element={<EventsDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MainPages;
