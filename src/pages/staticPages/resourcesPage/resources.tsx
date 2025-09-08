import gopuram from "../../../assets/projects overlaying image.png";
import backgroundFrame from "../../../assets/background_header_frame.png";
import panchangamImage from "../../../assets/panchangam images.png";
import "./resources.css";
const Resources = () => {
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
          <h1>Resources</h1>
          <p>
            Your knowledge hub for panchangam, reports, publications, and
            dharmic references.
          </p>
        </div>
      </div>
      <div className="resources-container col-md-12">
        <div className="vertical_spacer_small"></div>
        <div className="resources-title">
          <p className="h2">Panchangam</p>
        </div>
        <div className="vertical_spacer_small"></div>

        <div className="panchangam-cards-resources col-md-12">
          <div className="panchangam-card-resources col-md-4">
            <div className="panchangam-img-container">
              <img
                src={panchangamImage}
                alt="Panchangam"
                className="panchangam-img"
              />
            </div>
            <div className="panchangam-card-resources-footer">
              <p>Telugu Calendar JUL -2025</p>
            </div>
          </div>
          <div className="panchangam-card-resources col-md-4">
            <div className="panchangam-img-container">
              <img
                src={panchangamImage}
                alt="Panchangam"
                className="panchangam-img"
              />
            </div>
            <div className="panchangam-card-resources-footer">
              <p>Telugu Calendar AUG -2025</p>
            </div>
          </div>
          <div className="panchangam-card-resources col-md-4">
            <div className="panchangam-img-container">
              <img
                src={panchangamImage}
                alt="Panchangam"
                className="panchangam-img"
              />
            </div>
            <div className="panchangam-card-resources-footer">
              <p>Telugu Calendar SEP -2025</p>
            </div>
          </div>
          <div className="panchangam-card-resources col-md-4">
            <div className="panchangam-img-container">
              <img
                src={panchangamImage}
                alt="Panchangam"
                className="panchangam-img"
              />
            </div>
            <div className="panchangam-card-resources-footer">
              <p>Telugu Calendar SEP -2025</p>
            </div>
          </div>
          <div className="panchangam-card-resources col-md-4">
            <div className="panchangam-img-container">
              <img
                src={panchangamImage}
                alt="Panchangam"
                className="panchangam-img"
              />
            </div>
            <div className="panchangam-card-resources-footer">
              <p>Telugu Calendar SEP -2025</p>
            </div>
          </div>
        </div>
        <div className="reports-publications-container">
          <div className="vertical_spacer_small"></div>
          <div className="reports-publications-title">
            <p className="h2">Reports & Publications</p>
          </div>
          <div className="vertical_spacer_small"></div>

          <div className="reports-publications-cards col-md-12">
            <div className="reports-publications-card col-md-4">
              <div className="reports-publications-header">
                <div className="reports-publications-image">
                  <img
                    src={panchangamImage}
                    alt="Report Image"
                    className="report-image"
                  />
                </div>
              </div>
              <div className="reports-publications-footer">
                <p>Report Title</p>
              </div>
            </div>
            <div className="reports-publications-card col-md-4">
              <div className="reports-publications-header">
                <div className="reports-publications-image">
                  <img
                    src={panchangamImage}
                    alt="Report Image"
                    className="report-image"
                  />
                </div>
              </div>
              <div className="reports-publications-footer">
                <p>Report Title</p>
              </div>
            </div>
            <div className="reports-publications-card col-md-4">
              <div className="reports-publications-header">
                <div className="reports-publications-image">
                  <img
                    src={panchangamImage}
                    alt="Report Image"
                    className="report-image"
                  />
                </div>
              </div>
              <div className="reports-publications-footer">
                <p>Report Title</p>
              </div>
            </div>
          </div>
          <div className="vertical_spacer"></div>
        </div>
      </div>
    </>
  );
};
export default Resources;
