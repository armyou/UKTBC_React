// import React from 'react'
import gopuram from "../../../assets/services overlaying image.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import madhuVSastry from "../../../assets/madhuVSastry.png";
import srinivasSharmaYadati from "../../../assets/SrinivasSharmaYadati.png";
import shyamSundarSharmaAmbatipudi from "../../../assets/ShyamSundarSharmaAmbatipudi.png";
import bananaLeafMeal from "../../../assets/bananaLeafMeal.png";

import { Button } from "antd";
import { Icon } from "@iconify/react";

import "./services.css";
const Services = () => {
  return (
    <>
      <br />
      <div className="services-container">
        <div className="contact_us-image_container">
          <img
            src={backgroundFrame}
            alt="Background Frame"
            className="background-img"
          ></img>
          <img src={gopuram} alt="Gopuram" className="overlay-img"></img>
          <div className="contact_us-text">
            <h1>Our Services</h1>
            <p>
              Authentic rituals and traditional satvik food — serving the Telugu
              Brahmin community in the UK.
            </p>
          </div>
        </div>
        <div className="vertical_spacer"></div>
        <div className="services-page col-sm-12">
          <div className="brahmin_purohits-container">
            <div className="brahmin_purohits-item">
              <p className="brahmin_purohits-text h2">Brahmin Purohits</p>
            </div>
            <div className="brahmin_purohits-items">
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img src={madhuVSastry} alt="Brahmin Purohits"></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Pt. Madhu V Shastri{" "}
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Wolverhampton"}
                      </span>
                      <span>
                        <Icon icon="octicon:people-24" width="24" height="24" />
                        {"Minister of Hindu Religion"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Pt. Madhu V Shastri, full-time Smartha Brahmin Purohit
                        with 30+ years of dedicated service. Associated with the
                        Ministry of Hindu Religion UK, he performs Vivaham,
                        Gruhapravesham, Namakarana, Upanayanam, Annaprashana,
                        Aksharabhyasam, Satyanarayana Vratham, Lakshmi Puja,
                        Ganapathi, Navagraha, Rudra & Chandi Homams, Bhoomi &
                        Vastu Poojas, and Shraadha Karma. Fluent in Telugu,
                        Sanskrit, Hindi, Gujarati, Marathi & English, he
                        continues to uphold and share the richness of Sanatana
                        Dharma traditions. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img
                      src={srinivasSharmaYadati}
                      alt="Brahmin Purohits"
                    ></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Srinivas Sharma Yadati
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Hounslow"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Srinivas Sharma Yadati, Smartha Brahmin Purohit with 20+
                        years of experience, available on weekends. Performs all
                        Hindu rituals, Poojas & Homams. Donates Sambhavana
                        proceeds to Sri Govinda Guruswami Trust, Paluguralla
                        Palli, AP, India. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img
                      src={shyamSundarSharmaAmbatipudi}
                      alt="Brahmin Purohits"
                    ></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Shyam Sundar Sharma Ambatipudi
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Bracknell"}
                      </span>
                      <span>
                        <Icon icon="octicon:people-24" width="24" height="24" />
                        {"Minister of Hindu Religion"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Shyam Sundar Sharma Ambatipudi, Veda Pandit (Yajurvedam)
                        with 10+ years’ experience. Full-time Brahmin Purohit
                        performing Vivaham, Gruhapravesham, Abhishekam,
                        Kalyanam, Satyanarayana Vratam, Namakaram, Annaprasana,
                        Aksharabhyasam, Ganapati & Lakshmi Pooja, Navagraha
                        Shanti, Rudra Homam, Shankusthapana, Vaastu Shanti, and
                        Brahmins Aabdeekam. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img src={madhuVSastry} alt="Brahmin Purohits"></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Chandra Kolaganti
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Hounslow"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Chandra Kolaganti, full-time Smartha Brahmin Purohit
                        with 15+ years of experience. Performs all standard
                        Hindu rituals (Subha Karyakramamulu). Dedicated to
                        preserving Vedic traditions, guiding families with
                        devotion and sincerity. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img src={madhuVSastry} alt="Brahmin Purohits"></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Pavan Nagaraju
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Brentford"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Pavan Nagaraju, Samaveda Veda Pandit with 10+ years’
                        experience. Trained at Datta Peetham Veda Pathashala,
                        Mysore under Sri Rajesh Shrouthy garu and in Smartha
                        Archakatvam under Sri Vedantam Chandra Shekhar Avadhani
                        garu. Performs Gruhapravesham, Namakaranam,
                        Annaprashanam, Aksharabhyasam, Satyanarayana Vratam, all
                        major Poojas & Homas. Available mornings till 10am and
                        afternoons 12:30–5pm. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img src={madhuVSastry} alt="Brahmin Purohits"></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Ravi Kishore Annadanam
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Yorkshire"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Ravi Kishore Annadanam, Smarta Brahmin Purohit with 5+
                        years’ experience. Performs Vivaham, Gruhapravesham,
                        Namakarana, Upanayanam, Vrathams, Poojas & Homams.
                        Fluent in Telugu, Sanskrit, Hindi & English. Available
                        on weekends. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="brahmin_purohits-cards row">
                <div className="brahmin_purohits-card row">
                  <div className="image_container">
                    <img src={madhuVSastry} alt="Brahmin Purohits"></img>
                  </div>
                  <div className="brahmin_purohits-card-text">
                    <div className="brahmin_purohits-card-title h2">
                      Sai Venkatesh Ayyagari
                    </div>
                    <div className="brahmin_purohits-card-subtitle">
                      <span>
                        <Icon
                          icon="solar:phone-outline"
                          width="24"
                          height="24"
                        />
                        {" Mobile Number "}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols:mail-outline"
                          width="24"
                          height="24"
                        />
                        {" Email"}
                      </span>
                      <span>
                        <Icon
                          icon="material-symbols-light:home-pin-outline"
                          width="24"
                          height="24"
                        />
                        {"Croydon"}
                      </span>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-addresses">
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Midlands"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"United Kingdom"}
                      </div>
                      <div className="location_1">
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Europe"}
                      </div>
                    </div>
                    <div className="vertical_spacer_smaller"></div>
                    <div className="brahmin_purohits-card-description">
                      <p>
                        Sai Venkatesh Ayyagari, based in Croydon, Smartha/Shiva
                        Brahmin Purohit with 10+ years of experience. Performs
                        Vivaham, Gruhapravesham, Namakarana, Annaprasana,
                        Aksharabhyasam, Satyanarayana Vratam, Lakshmi Puja,
                        Ganapati Homam, Navagraha & Rudra Homam, Bhoomi Puja and
                        Vastu Puja. Learned under the guidance of his
                        grandfather, originally from near Visakhapatnam, later
                        settled in Hyderabad. In the UK since Feb 2024.
                        Available on weekends, and weekdays with advance
                        booking. 
                      </p>
                    </div>
                    <div className="brahmin_purohits-card-button">
                      <Button type="primary" className="book-purohit-button">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vertical_spacer"></div>
            <div className="madi_vantalu-container">
              <div className="madi_vantalu-title-container">
                <div className="madi_vantalu-title">
                  <p className="h2">Madi Vantalu (Brahmin Caterers)</p>
                </div>
                <div className="madi_vantalu-view-more">
                  <a href="#">View more →</a>
                </div>
              </div>
              <div className="madi_vantalu-items row">
                <div className="madi_vantalu-card row">
                  <div className="image_container">
                    <img src={bananaLeafMeal} alt="Brahmin Caterers"></img>
                  </div>
                  <div className="madi_vantalu-card-text">
                    <div className="madi_vantalu-card-title h2">
                      Caterer Name
                    </div>
                    <div className="madi_vantalu-card-subtitle">
                      <span>
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Service Location "}
                      </span>
                      <div className="vertical_spacer_smaller"></div>
                    </div>
                    <div className="madi_vantalu-button">
                      <Button
                        type="primary"
                        className="madi-vantalu-enquiry-button"
                      >
                        Enquiry Now{" "}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="madi_vantalu-card row">
                  <div className="image_container">
                    <img src={bananaLeafMeal} alt="Brahmin Caterers"></img>
                  </div>
                  <div className="madi_vantalu-card-text">
                    <div className="madi_vantalu-card-title h2">
                      Caterer Name
                    </div>
                    <div className="madi_vantalu-card-subtitle">
                      <span>
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Service Location "}
                      </span>
                      <div className="vertical_spacer_smaller"></div>
                    </div>
                    <div className="madi_vantalu-button">
                      <Button
                        type="primary"
                        className="madi-vantalu-enquiry-button"
                      >
                        Enquiry Now{" "}
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="madi_vantalu-card row">
                  <div className="image_container">
                    <img src={bananaLeafMeal} alt="Brahmin Caterers"></img>
                  </div>
                  <div className="madi_vantalu-card-text">
                    <div className="madi_vantalu-card-title h2">
                      Caterer Name
                    </div>
                    <div className="madi_vantalu-card-subtitle">
                      <span>
                        <Icon
                          icon="hugeicons:location-10"
                          width="24"
                          height="24"
                        />
                        {"Service Location "}
                      </span>
                      <div className="vertical_spacer_smaller"></div>
                    </div>
                    <div className="madi_vantalu-button">
                      <Button
                        type="primary"
                        className="madi-vantalu-enquiry-button"
                      >
                        Enquiry Now{" "}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
