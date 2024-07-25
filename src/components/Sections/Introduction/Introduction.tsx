import { FormattedMessage } from "react-intl"
import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Row, Col, Card } from "react-bootstrap"
import InfoTable from "./InfoTable"
import LogoSrc from "../../../images/logo4.png"

const Introduction = () => {
  return (
    <>
      <Title id="header.bemutatkozas" />
      <Row className="py-5">
        <Col lg={6} className="d-flex flex-column p-2 p-lg-3">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column p-4 p-lg-5">
              <img src={LogoSrc} alt="" className="w-25 align-self-center" />
              <span className="mt-4">
                <FormattedMessage id="bemutatkozas.content1" />
              </span>
              <span className="mt-4">
                <FormattedMessage id="bemutatkozas.content2" />
              </span>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} className="p-2 p-lg-3">
          <Card className="h-100">
            <Card.Body className="d-flex flex-column p-4 p-lg-5">
              <InfoTable />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="text-center fw-bold mt-4">
          <FormattedMessage id="bemutatkozas.welcome" />
        </Col>
      </Row>
    </>
  )
}

export default Introduction
