import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FormattedMessage } from "react-intl"

const Contact = () => {
  return (
    <Element name="#kapcsolat" className="element">
      <Title id="header.kapcsolat" />
      <Row>
        <Col md={12} className="d-flex flex-column align-items-center mt-5">
          <h3 className="fw-bold">
            <FormattedMessage id="kapcsolat.kerdese-van" />
          </h3>
          <h4 className="text-secondary">
            <FormattedMessage id="kapcsolat.keressen-bizalommal" />
          </h4>
        </Col>
        <Col md={12} className="d-flex flex-column align-items-center mt-5">
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaPhoneAlt className="fs-2" />
            <span className="fs-1">06-30-904-6252</span>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            <MdOutlineMail className="fs-2" />
            <span className="fs-1">rendeles@vorosvartaxi.hu</span>
          </div>
        </Col>
      </Row>
    </Element>
  )
}

export default Contact
