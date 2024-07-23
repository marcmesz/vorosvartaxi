import { Alert, Col, Row, Table } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import InfoIcon from "../../../images/svg/ico-info.svg?react"

const InfoTable = () => {
  return (
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
  )
}

export default InfoTable
