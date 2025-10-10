import "./Footer.css"
import { Row, Col } from "react-bootstrap"
import CookieBanner from "../CookieBanner/CookieBanner"

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <>
      <div className="bg-black text-secondary">
        <div className="container">
          <Row>
            <Col className="py-3 text-center">Vörösvár Taxi &copy; {year}</Col>
          </Row>
        </div>
        <CookieBanner />
      </div>
    </>
  )
}
