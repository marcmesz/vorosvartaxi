import "./Footer.css"
import { Row, Col, Image } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import WebMarketSrc from "../../images/webmarket.png"
import CookieConsent from "react-cookie-consent"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="bg-black text-secondary">
        <div className="container">
          <Row>
            <Col md={6} className="py-3 text-center text-md-start">
              Vörösvár Taxi &copy; {year}
            </Col>
            <Col md={6} className="py-3 text-center text-md-end">
              <FormattedMessage id="footer.made-by" />
              <a
                href="https://marcmesz.github.io"
                title="Web-Market honlapkészítés"
                target="_blank"
                className="made-by-link ms-2"
              >
                <Image src={WebMarketSrc} width={140} />
              </a>
            </Col>
          </Row>
        </div>
      </div>
      <CookieConsent
        buttonStyle={{ backgroundColor: "#ffc000" }}
        buttonWrapperClasses="align-self-center"
        buttonClasses="rounded py-2 px-3 text-uppercase fw-bold fs-5"
        buttonText={<FormattedMessage id="footer.cc.btn" />}
        contentStyle={{ margin: 0 }}
        contentClasses="m-4"
        containerClasses="justify-content-center"
      >
        <section className="d-flex flex-column m-0">
          <span className="fw-bold">
            <FormattedMessage id="footer.cc.title" />
          </span>
          <span className="text-warning">
            <FormattedMessage id="footer.cc.content" />
          </span>
        </section>
      </CookieConsent>
    </>
  )
}
