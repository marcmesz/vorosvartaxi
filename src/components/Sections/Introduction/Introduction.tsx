import { FormattedMessage } from "react-intl"
import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Row, Col } from "react-bootstrap"
import InfoTable from "./InfoTable"

const Introduction = () => {
  return (
    <>
      <Title id="header.bemutatkozas" />
      <Row>
        <Col md={6}>
          <FormattedMessage id="bemutatkozas.content1" />
        </Col>
        <Col md={6}>
          <FormattedMessage id="bemutatkozas.content2" />
        </Col>
      </Row>
      <InfoTable />
    </>
  )
}

export default Introduction
