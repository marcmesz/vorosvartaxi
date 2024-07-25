import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col, Image } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { BsTaxiFrontFill } from "react-icons/bs"
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { FaRegCheckCircle, FaGlassCheers, FaPhoneAlt } from "react-icons/fa"
import { RiStarSFill } from "react-icons/ri"
import HeroSrc from "../../../images/hero.jpg"

const Services = () => {
  return (
    <Element name="#szolgaltatasok" className="element">
      <Title id="header.szolgaltatasok" />
      <Row className="mt-md-5">
        <Col md={6} className="d-flex justify-content-center justify-content-md-end p-3">
          <Image src={HeroSrc} className="w-75 rounded object-fit-contain" alt="" />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center p-3">
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaRegCheckCircle className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.non-stop" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <BsTaxiFrontFill className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.szemelyszallitas" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaGlassCheers className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.rendezvenyek" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaPersonWalkingLuggage className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.soforszolgalat" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <FaPhoneAlt className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.elorendeles" />
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <RiStarSFill className="fs-2 flex-shrink-0" />
            <FormattedMessage id="szolgaltatasok.pontossag" />
          </div>
        </Col>
        <Col className="text-center mt-5 fw-bold">
          <FormattedMessage id="szolgaltatasok.welcome" />
        </Col>
      </Row>
    </Element>
  )
}

export default Services
