import { FormattedMessage } from "react-intl"
import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Row, Col, Alert, Table } from "react-bootstrap"
import InfoIcon from "../../../images/svg/ico-info.svg?react"

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

      <Row>
        <Col md={12}>
          <Alert variant="warning" className="fw-bold">
            <InfoIcon />
            <span className="ms-2">
              <FormattedMessage id="bemutatkozas.felhivas" />
            </span>
          </Alert>
        </Col>
        <Col md={12}>
          <Table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <FormattedMessage id="bemutatkozas.repteri-transzfer" />
                </td>
                <td>
                  <FormattedMessage id="bemutatkozas.non-stop-24-ora" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="bemutatkozas.unnepnapok-elotti-ejszaka" />
                </td>
                <td>
                  <FormattedMessage id="bemutatkozas.non-stop" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="bemutatkozas.hetvege" />
                </td>
                <td>
                  <FormattedMessage id="bemutatkozas.pentek-hetfo" />
                </td>
              </tr>
              <tr>
                <td>
                  <FormattedMessage id="bemutatkozas.hetfo-csutortok" />
                </td>
                <td>05:30 - 00:30</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col>
          <FormattedMessage id="bemutatkozas.welcome" />
        </Col>
      </Row>
    </>
  )
}

export default Introduction
