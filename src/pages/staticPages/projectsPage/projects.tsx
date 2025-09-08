// import React from 'react'
import gopuram from "../../../assets/projects overlaying image.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import { Button } from "antd";
import "./projects.css";
const Projects = () => {
  return (
    <>
      <div className="contact_us-image_container">
        <img
          src={backgroundFrame}
          alt="Background Frame"
          className="background-img"
        ></img>
        <img src={gopuram} alt="Gopuram" className="overlay-img"></img>
        <div className="contact_us-text">
          <h1>Projects</h1>
          <p>
            Initiatives that preserve dharma, strengthen culture, and serve the
            community
          </p>
          <div className="projects_header-button">
            <Button type="primary" className="projects_join-button">
              Join as volunteer
            </Button>
          </div>
        </div>
      </div>
      <div className="projects-container col-md-12">
        <div className="projects-list">
          <div className="vertical_spacer"></div>
          <p className="projects-content-title h2">Our Projects</p>
          <div className="vertical_spacer"></div>

          <div className="projects-items row">
            <div className="projects-item">
              <div className="project-image-container">
                <img src={gopuram} alt="Project 1"></img>
              </div>
              <div className="project-text">
                <p className="project-title h3">Project Title</p>
                <p className="project-description">
                  Lorem ipsum dolor sit amet consectetur. Nibh eleifend auctor
                  sit eleifend posuere pulvinar turpis. Feugiat etiam nisi
                  habitasse cursus pellentesque lacinia blandit. Nulla et
                  interdum ac odio pellentesque lobortis ullamcorper. Quis ut
                  ultrices purus nunc ac adipiscing pretium dolor ullamcorper.
                  Curabitur egestas quisque neque tristique velit convallis eu
                  a. Aenean eleifend a et egestas imperdiet enim lectus. Turpis
                  sem leo vestibulum aenean venenatis eget. Sit metus risus in
                  congue. Scelerisque donec scelerisque aenean interdum cursus.
                  Pellentesque amet sem pharetra orci mus diam et morbi. In
                  aenean ornare nullam diam arcu mi est.
                </p>
                <div className="project-button">
                  <Button type="primary" className="projects_know_more-button">
                    Know more
                  </Button>
                </div>
              </div>
            </div>
            <div className="projects-item">
              <div className="project-text">
                <div className="project-title h3">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur. Nibh eleifend auctor
                  sit eleifend posuere pulvinar turpis. Feugiat etiam nisi
                  habitasse cursus pellentesque lacinia blandit. Nulla et
                  interdum ac odio pellentesque lobortis ullamcorper. Quis ut
                  ultrices purus nunc ac adipiscing pretium dolor ullamcorper.
                  Curabitur egestas quisque neque tristique velit convallis eu
                  a. Aenean eleifend a et egestas imperdiet enim lectus. Turpis
                  sem leo vestibulum aenean venenatis eget. Sit metus risus in
                  congue. Scelerisque donec scelerisque aenean interdum cursus.
                  Pellentesque amet sem pharetra orci mus diam et morbi. In
                  aenean ornare nullam diam arcu mi est.
                </div>
                <div className="project-button">
                  <Button type="primary" className="projects_know_more-button">
                    Know more
                  </Button>
                </div>
              </div>
              <div className="project-image-container">
                <img src={gopuram} alt="Project 1"></img>
              </div>
            </div>
            <div className="projects-item">
              <div className="project-image-container">
                <img src={gopuram} alt="Project 1"></img>
              </div>
              <div className="project-text">
                <div className="project-title h3">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur. Nibh eleifend auctor
                  sit eleifend posuere pulvinar turpis. Feugiat etiam nisi
                  habitasse cursus pellentesque lacinia blandit. Nulla et
                  interdum ac odio pellentesque lobortis ullamcorper. Quis ut
                  ultrices purus nunc ac adipiscing pretium dolor ullamcorper.
                  Curabitur egestas quisque neque tristique velit convallis eu
                  a. Aenean eleifend a et egestas imperdiet enim lectus. Turpis
                  sem leo vestibulum aenean venenatis eget. Sit metus risus in
                  congue. Scelerisque donec scelerisque aenean interdum cursus.
                  Pellentesque amet sem pharetra orci mus diam et morbi. In
                  aenean ornare nullam diam arcu mi est.
                </div>
                <div className="project-button">
                  <Button type="primary" className="projects_know_more-button">
                    Know more
                  </Button>
                </div>
              </div>
            </div>
            <div className="projects-item">
              <div className="project-text">
                <div className="project-title h3">Project Title</div>
                <div className="project-description">
                  Lorem ipsum dolor sit amet consectetur. Nibh eleifend auctor
                  sit eleifend posuere pulvinar turpis. Feugiat etiam nisi
                  habitasse cursus pellentesque lacinia blandit. Nulla et
                  interdum ac odio pellentesque lobortis ullamcorper. Quis ut
                  ultrices purus nunc ac adipiscing pretium dolor ullamcorper.
                  Curabitur egestas quisque neque tristique velit convallis eu
                  a. Aenean eleifend a et egestas imperdiet enim lectus. Turpis
                  sem leo vestibulum aenean venenatis eget. Sit metus risus in
                  congue. Scelerisque donec scelerisque aenean interdum cursus.
                  Pellentesque amet sem pharetra orci mus diam et morbi. In
                  aenean ornare nullam diam arcu mi est.
                </div>
                <br />
                <div className="project-button">
                  <Button type="primary" className="projects_know_more-button">
                    Know more
                  </Button>
                </div>
              </div>
              <div className="project-image-container">
                <img src={gopuram} alt="Project 1"></img>
              </div>
            </div>
            <div className="vertical_spacer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
