import dharmaChakra from "../../../assets/dharmaChakra.png";
import gopuram from "../../../assets/gopuram.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import "./about.css";
const About = () => {
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
          <h1>About Us</h1>
          <p>
            Dharmo Rakṣhati Rakṣhitaḥ – Dharma protects those who protect it
          </p>
        </div>
      </div>
      <div className="about-page col-sm-12">
        <div className="vertical_spacer"></div>
        <div className="about-content">
          <div>
            <p className="about_us_heading_1 h2">
              About UK Telugu Brahmin Community (UKTBC)
            </p>
          </div>
          <div className="about-cards-container row">
            <div className="about-card">
              <div>
                <p className="about_us_heading_2 h4">Mission</p>
              </div>
              <div className="about-card-description">
                <p>
                  To preserve and promote Sanatana Dharma through authentic
                  Vedic practices, selfless service (Seva), and community
                  empowerment, ensuring Telugu Brahmin traditions thrive for
                  future generations.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div>
                <p className="about_us_heading_2 h4">Vision</p>
              </div>
              <div className="about-card-description">
                <p>
                  A united Telugu Brahmin community, rooted in dharma, living
                  with authenticity, inclusivity, and cultural pride, while
                  contributing positively to the wider Hindu society.
                </p>
              </div>
            </div>
            <div className="about-card">
              <div>
                <p className="about_us_heading_2 h4">Objectives</p>
              </div>
              <div className="about-card-description">
                <p>
                  Uphold and protect dharmic values and practices. Train and
                  support purohits for authentic rituals. Preserve and transmit
                  Vedic, Telugu, and Sanskrit knowledge. Encourage sattvik
                  living, seva, and volunteer spirit. Foster harmony,
                  sustainability, and long-term growth
                </p>
              </div>
            </div>
          </div>
          <div className="vertical_spacer"></div>
          <div className="guidance_section row">
            <div className="guidance_image">
              <img src={dharmaChakra} alt="Dharma Chakra" />
            </div>
            <div className="guidance_text">
              <div>
                <p className="about_us_heading_21 h2">Guiding Principles</p>
              </div>
              <div>
                <p className="about_us_paragraph">
                  <ul>
                    <li>
                      Dharma First <br />
                      Uphold Sanatana Dharma – ధర్మో రక్షతి రక్షితః.
                    </li>
                    <li>
                      Authenticity in Practice
                      <br /> All rituals & teachings by trained Telugu Brahmin
                      purohits.
                    </li>
                    <li>
                      Seva (Selfless Service)
                      <br /> Serve with humility, inclusivity, and devotion.
                    </li>
                    <li>
                      Preservation of Knowledge
                      <br /> Safeguard Vedic wisdom, Telugu, Sanskrit &
                      heritage.
                    </li>
                    <li>
                      Accessibility for All
                      <br /> Open spiritual, educational & cultural activities
                      to everyone.
                    </li>
                    <li>
                      Community Cohesion
                      <br /> Foster unity, harmony, and mutual respect.
                    </li>
                    <li>
                      Satvik Living
                      <br /> Promote vegetarian food practices & sustainable
                      lifestyles.
                    </li>
                    <li>
                      Volunteer Spirit
                      <br /> Volunteer-led charity; individuals at the heart of
                      all programs.
                    </li>
                    <li>
                      Cultural Celebration
                      <br /> Honour dharmic festivals & traditions with pride.
                    </li>
                    <li>Sustainability & Growth</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
          <div className="vertical_spacer"></div>
          <div className="governance_ethics_section">
            <div className="governance_ethics_content">
              <div className="governance_ethics_text">
                <p className="about_us_heading_2 h2">Governance & Ethics</p>
              </div>
              <div className="vertical_spacer_small"></div>
              <div className="governance_ethics_cards row">
                <div className="governance_ethics_card col-sm-12 col-md-2">
                  <p className="about_us_heading_3 h4">
                    Transparent & Accountable Governance
                  </p>
                  <p>
                    UKTBC is guided by a volunteer-led Board of Trustees and
                    Executive Committees, ensuring decisions are taken
                    collectively with fairness, inclusivity, and responsibility.
                  </p>
                </div>

                <div className="governance_ethics_card col-sm-12 col-md-2">
                  <p className="about_us_heading_3 h4">
                    Ethical & Dharmic Practices
                  </p>
                  <p>
                    All initiatives uphold dharmic values, honesty, and respect.
                    Rituals and education are delivered with authenticity,
                    safeguarding tradition while serving with integrity.
                  </p>
                </div>
                <div className="governance_ethics_card col-sm-12 col-md-2">
                  <p className="about_us_heading_3 h4">
                    Sustainable & Responsible Growth
                  </p>
                  <p>
                    Our programmes operate with transparency and long-term
                    vision, ensuring financial integrity and sustainable impact
                    for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="vertical_spacer"></div>
        </div>
      </div>
    </>
  );
};

export default About;
