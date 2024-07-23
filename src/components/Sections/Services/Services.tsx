import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"

export default function Services() {
  return (
    <Element name="#szolgaltatasok" className="element">
      <Title id="header.szolgaltatasok" />
      <Row className="w-100">
        <Col className="">szolgaltatasok</Col>
      </Row>
    </Element>
  )
}
