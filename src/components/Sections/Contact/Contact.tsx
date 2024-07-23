import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <Element name="#kapcsolat" className="element">
      <Title id="header.kapcsolat" />
      <Row>
        <Col className="">kapcsolat</Col>
      </Row>
    </Element>
  )
}

export default Contact
