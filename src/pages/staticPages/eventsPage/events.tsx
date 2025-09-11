// import React from 'react'
import gopuram from "../../../assets/projects overlaying image.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import upcominEventImage from "../../../assets/upcoming events.png";
import ourPastEvents from "../../../assets/upcoming events images.png";
import { Button } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./events.css";
const Events = () => {
  return (
    <>
      <div className="vertical_spacer_smaller"></div>
      <div className="contact_us-image_container">
        <img
          src={backgroundFrame}
          alt="Background Frame"
          className="background-img"
        ></img>
        <img src={gopuram} alt="Gopuram" className="overlay-img"></img>
        <div className="contact_us-text">
          <h1>Events</h1>
          <p>
            Celebrating dharma, culture, and togetherness through festivals and
            gatherings.
          </p>
          <div className="projects_header-button">
            <Button type="primary" className="projects_join-button">
              Join as volunteer
            </Button>
          </div>
        </div>
      </div>
      <div className="vertical_spacer_small"></div>
      <div className="events-container">
        <div className="events-container-title">
          <p className="h2">Upcoming Events</p>
        </div>
        <div className="vertical_spacer_small"></div>
        <div className="events-container-content">
          <div className="upcoming-event-cards">
            <div className="upcoming-event-card">
              <div className="upcoming-event-image">
                <img
                  src={upcominEventImage}
                  alt="upcoming event image"
                  className="upcoming-event-img"
                />
              </div>
              <div className="upcoming-event-text-container">
                <div className="upcoming-event-text-title">
                  <p className="h4">Event Title</p>
                </div>
                <div className="upcoming-event-text-date">
                  <p>
                    <span>
                      <Icon
                        icon="solar:calendar-outline"
                        width="24"
                        height="24"
                      />
                      {" 12-09-2025"}
                    </span>
                  </p>
                </div>
                <div className="upcoming-event-text-location">
                  <p>
                    <Icon icon="hugeicons:location-09" width="24" height="24" />
                    {
                      " Heston Community School, 91 Heston Rd, Heston, Hounslow TW5 0QR, London"
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="upcoming-event-card">
              <div className="upcoming-event-image">
                <img
                  src={upcominEventImage}
                  alt="upcoming event image"
                  className="upcoming-event-img"
                />
              </div>
              <div className="upcoming-event-text-container">
                <div className="upcoming-event-text-title">
                  <p className="h4">Event Title</p>
                </div>
                <div className="upcoming-event-text-date">
                  <p>
                    <span>
                      <Icon
                        icon="solar:calendar-outline"
                        width="24"
                        height="24"
                      />
                      {" 12-09-2025"}
                    </span>
                  </p>
                </div>
                <div className="upcoming-event-text-location">
                  <p>
                    <Icon icon="hugeicons:location-09" width="24" height="24" />
                    {
                      " Heston Community School, 91 Heston Rd, Heston, Hounslow TW5 0QR, London"
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="upcoming-event-card">
              <div className="upcoming-event-image">
                <img
                  src={upcominEventImage}
                  alt="upcoming event image"
                  className="upcoming-event-img"
                />
              </div>
              <div className="upcoming-event-text-container">
                <div className="upcoming-event-text-title">
                  <p className="h4">Event Title</p>
                </div>
                <div className="upcoming-event-text-date">
                  <p>
                    <span>
                      <Icon
                        icon="solar:calendar-outline"
                        width="24"
                        height="24"
                      />
                      {" 12-09-2025"}
                    </span>
                  </p>
                </div>
                <div className="upcoming-event-text-location">
                  <p>
                    <Icon icon="hugeicons:location-09" width="24" height="24" />
                    {
                      " Heston Community School, 91 Heston Rd, Heston, Hounslow TW5 0QR, London"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vertical_spacer_small"></div>
        <div className="our-past-events-title">
          <p className="h2">Our Past Events</p>
        </div>
        <div className="vertical_spacer_small"></div>
        <div className="past-event-container">
          <div className="past-event-images col-md-12">
            <div className="past-event-image col-md-4">
              <img
                src={ourPastEvents}
                alt="past event image"
                className="past-event-img"
              />
            </div>
            <div className="past-event-image col-md-4">
              <img
                src={ourPastEvents}
                alt="past event image"
                className="past-event-img"
              />
            </div>
            <div className="past-event-image col-md-4">
              <img
                src={ourPastEvents}
                alt="past event image"
                className="past-event-img"
              />
            </div>
            <div className="past-event-image col-md-4">
              <img
                src={ourPastEvents}
                alt="past event image"
                className="past-event-img"
              />
            </div>
            <div className="past-event-image col-md-4">
              <img
                src={ourPastEvents}
                alt="past event image"
                className="past-event-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="vertical_spacer"></div>
    </>
  );
};

export default Events;
