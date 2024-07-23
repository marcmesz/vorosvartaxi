import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Row, Col } from "react-bootstrap"

export default function Introduction() {
  return (
    <>
      <Title id="header.bemutatkozas" />
      <Row className="w-100">
        <Col className="">bemutatkozas</Col>
      </Row>
    </>
  )
}
