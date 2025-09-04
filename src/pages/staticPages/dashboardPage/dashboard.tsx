import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./dashboard.css";
import section1Image from "../../../assets/title_1_img.png";
import section2Image from "../../../assets/title_2_img.png";
import meal from "../../../assets/meals.png";
import purohith from "../../../assets/purohith_1.png";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard col-sm-12" style={{ position: "relative" }}>
      <div className="vertical_spacer"></div>
      <div style={{ width: "99%", background: "#FAFAFA" }}>
        <div className="section_1 col-md-12">
          <div>
            <div className="title_1">
              <p className="h1 title_1">
                Preserving <span className="title_1_span_1">Dharma</span>,
                <br></br> Nurturing{" "}
                <span className="title_1_span_2">Community</span>
              </p>
              <br />
            </div>
            <div className="desc_1">
              <p>
                The UK Telugu Brahmin Community (UKTBC) is a registered UK
                charity (No: 1205566) dedicated to safeguarding Sanatana Dharma,
                promoting Telugu & Sanskrit learning, and celebrating dharmic
                traditions through seva, education, and cultural engagement.
                <br /> Rooted in the timeless values of our heritage, we bring
                families, porihits, and volunteers together to ensure faith and
                culture flourish for generations to come.
              </p>
              <br />
            </div>
            <div className="section_1_btn">
              <div className="header_btn">
                <Button
                  type="primary"
                  shape="round"
                  className="hbtn col-sm-8"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    width: 139,
                    height: 46,
                    borderRadius: 8,
                  }}
                  onClick={() => navigate("/donate-now")}
                >
                  Donate Now
                </Button>
              </div>
              <div className="explore_btn">
                <Button
                  type="primary"
                  shape="round"
                  className="explbtn col-sm-8"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    width: 139,
                    height: 46,
                    borderRadius: 8,
                  }}
                  onClick={() => navigate("/donate-now")}
                >
                  Explore our events
                </Button>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                className="section_1_image"
                alt="Section 1 image"
                src={section1Image}
                style={{ width: "31.042vw", height: "20.367vw" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical_spacer"></div>
      <div style={{ width: "99%" }}>
        <div className="section_2 col-md-12">
          <div>
            <div>
              <img
                className="section_2_image"
                alt="Section 2 image"
                src={section2Image}
                style={{ width: "31.042vw", height: "20.367vw" }}
              ></img>
            </div>
          </div>
          <div>
            <div className="title_2">
              <p className="h1 title_2">Who We Are</p>
              <br />
              <br />
            </div>
            <div className="desc_2">
              <p>
                The UK Telugu Brahmin Community (UKTBC) is a registered charity
                dedicated to preserving Sanatana Dharma, Vedic knowledge, and
                Telugu culture in the United Kingdom.
                <br />
                <br /> Through seva, education, and dharmic traditions, we
                connect families and generations—ensuring our spiritual and
                cultural heritage continues to thrive.
              </p>
              <br />
              <br />
            </div>
            <div className="section_2_btn">
              <div className="explore_btn">
                <Button
                  type="primary"
                  shape="round"
                  className="learnbtn col-sm-8"
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    width: 139,
                    height: 46,
                    borderRadius: 8,
                  }}
                  onClick={() => navigate("/donate-now")}
                >
                  Learn more about us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "99%", background: "#FAFAFA" }}>
        <div className="section_3_container">
          <div className="section_3 col-md-12">
            <div>
              <p className="h2 section_3_title">Our Initiatives </p>
            </div>
            <div>
              <div className="cards-container">
                {/* Card 1 */}
                <div className="card">
                  <Icon
                    icon="fluent-emoji-high-contrast:diya-lamp"
                    width="64"
                    height="64"
                    style={{
                      color: "white",
                      backgroundColor: "#b71c1c",
                      borderRadius: "50px",
                      padding: "15px",
                    }}
                  />
                  <h3 className="card-title">Dharma & Tradition</h3>
                  <p className="card-text">
                    Connecting trained Telugu Brahmin porohit with communities
                    across the UK to support rituals, ceremonies, and dharmic
                    observances.
                  </p>
                  <a href="/dharma" className="card-link">
                    Learn More →
                  </a>
                </div>
                {/* Card 2 */}
                <div className="card">
                  <Icon
                    icon="fluent-emoji-high-contrast:fork-and-knife-with-plate"
                    width="64"
                    height="64"
                    style={{
                      color: "white",
                      backgroundColor: "#b71c1c",
                      borderRadius: "50px",
                      padding: "15px",
                    }}
                  />
                  <h3 className="card-title">Satvik Living (Madi Vantalu)</h3>
                  <p className="card-text">
                    Promoting satvik vegetarian food & connecting Brahmin
                    caterers with communities for spiritually aligned catering.
                  </p>
                  <a href="/satvik" className="card-link">
                    Learn More →
                  </a>
                </div>
                {/* Card 3 */}
                <div className="card">
                  <Icon
                    icon="uil:calender"
                    width="64"
                    height="64"
                    style={{
                      color: "white",
                      backgroundColor: "#b71c1c",
                      borderRadius: "50px",
                      padding: "15px",
                    }}
                  />
                  <h3 className="card-title">Dharmic Festivals & Events</h3>
                  <p className="card-text">
                    Organizing major Hindu festivals like Maha Shivaratri &
                    Seetharama Kalyanam, uniting the community in devotion.
                  </p>
                  <a href="/festivals" className="card-link">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical_spacer"></div>
      <div className="vertical_spacer"></div>
      <div className="section_4_container">
        <div className="section_4 col-md-12">
          <div>
            <p className="h2 section_3_title">Our Services</p>
          </div>
          <div className="cards-container_1">
            {/* Card 1 */}
            <div className="booking-card_1">
              <img
                src={purohith}
                alt="Brahmin Purohit"
                className="card-image_1"
              />
              <div className="card-content_1">
                <h3>Brahmin Purohit Booking</h3>
                <p>
                  Book trained Brahmin purohits for rituals, samskaras, and
                  ceremonies across the UK.
                </p>
                <Button type="primary" className="card-btn_1">
                  Book Now
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="booking-card_1">
              <img src={meal} alt="Madi Vantalu" className="card-image_1" />
              <div className="card-content_1">
                <h3>Madi Vantalu (Brahmin Caterers)</h3>
                <p>
                  Experience sattvik vegetarian catering rooted in dharmic
                  values, for family functions, festivals, and community events.
                </p>
                <Button type="primary" className="card-btn_1">
                  Book Now
                </Button>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
