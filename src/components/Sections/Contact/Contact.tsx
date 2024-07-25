import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col, Image } from "react-bootstrap"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FormattedMessage } from "react-intl"
import LogoSrc from "../../../images/logo4.png"

const Contact = () => {
  return (
    <Element name="#kapcsolat" className="element mb-0">
      <Title id="header.kapcsolat" />
      <Row className="d-flex flex-column flex-md-row align-items-center">
        <Col className="d-flex flex-column align-items-center align-items-md-end py-4 py-md-5 my-0 my-md-5">
          <div className="d-flex flex-column align-items-center">
            <h3 className="fw-bold">
              <FormattedMessage id="kapcsolat.kerdese-van" />
            </h3>
            <h4 className="text-secondary">
              <FormattedMessage id="kapcsolat.keressen-bizalommal" />
            </h4>
          </div>
        </Col>
        <Col sm={12} md={4} className="text-center">
          <Image src={LogoSrc} alt="Vörösvár Taxi" className="w-25" />
        </Col>
        <Col className="d-flex flex-column align-items-center align-items-md-start justify-content-center py-4 py-md-5 my-0 my-md-5">
          <div className="d-flex flex-column align-items-center">
            <div>
              <div className="d-flex align-items-center flex-column flex-sm-row mb-4">
                <FaPhoneAlt className="fs-1 flex-shrink-0" />
                <span className="ms-0 ms-sm-3 fs-4">06-30-904-6252</span>
              </div>

              <div className="d-flex align-items-center flex-column flex-sm-row ">
                <MdOutlineMail className="fs-1 flex-shrink-0" />
                <span className="ms-0 ms-sm-3 fs-4">
                  rendeles@vorosvartaxi.hu
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Element>
  )
}

export default Contact
