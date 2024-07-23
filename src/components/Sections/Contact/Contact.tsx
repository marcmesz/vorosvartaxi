import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"

export default function Contact() {
  return (
    <Element name="#kapcsolat" className="element">
      <Title id="header.kapcsolat" />
      <Row className="w-100">
        <Col className="">kapcsolat</Col>
      </Row>
    </Element>
  )
}
