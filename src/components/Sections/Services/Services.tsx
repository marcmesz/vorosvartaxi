import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { BsTaxiFrontFill } from "react-icons/bs"
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { FaRegCheckCircle, FaGlassCheers, FaPhoneAlt } from "react-icons/fa"
import { RiStarSFill } from "react-icons/ri"

const Services = () => {
  return (
    <Element name="#szolgaltatasok" className="element">
      <Title id="header.szolgaltatasok" />
      <Row>
        <Col>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaRegCheckCircle className="fs-2" />
            <FormattedMessage id="szolgaltatasok.non-stop" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <BsTaxiFrontFill className="fs-2" />
            <FormattedMessage id="szolgaltatasok.szemelyszallitas" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaGlassCheers className="fs-2" />
            <FormattedMessage id="szolgaltatasok.rendezvenyek" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaPersonWalkingLuggage className="fs-2" />
            <FormattedMessage id="szolgaltatasok.soforszolgalat" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaPhoneAlt className="fs-2" />
            <FormattedMessage id="szolgaltatasok.elorendeles" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <RiStarSFill className="fs-2" />
            <FormattedMessage id="szolgaltatasok.pontossag" />
          </div>

          <FormattedMessage id="szolgaltatasok.welcome" />
        </Col>
      </Row>
    </Element>
  )
}

export default Services
