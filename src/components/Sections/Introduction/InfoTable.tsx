import { Alert, Col, Row, Table } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import InfoIcon from "../../../images/svg/ico-info.svg?react"

const InfoTable = () => {
  return (
    <Row className="p-0">
      <Col md={12} className="mb-3">
        <Alert variant="warning" className="d-flex align-items-center">
          <InfoIcon className="flex-shrink-0" />
          <div className="ms-3 d-flex flex-column">
            <span className="fw-bold">
              <FormattedMessage id="bemutatkozas.felhivas" />
            </span>
            <span>
              <FormattedMessage id="bemutatkozas.felhivas.content1" />
            </span>
          </div>
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
    </Row>
  )
}

export default InfoTable
