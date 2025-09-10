import "./Footer.css"
import { Row, Col, Image } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import WebMarketSrc from "../../images/webmarket.png"
import CookieBanner from "../CookieBanner/CookieBanner"

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
        <CookieBanner />
      </div>
    </>
  )
}
