import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"

const Services = () => {
  return (
    <Element name="#szolgaltatasok" className="element">
      <Title id="header.szolgaltatasok" />
      <Row>
        <Col>szolgaltatasok</Col>
      </Row>
    </Element>
  )
}

export default Services
