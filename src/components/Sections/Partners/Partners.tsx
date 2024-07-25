import "../../UI/Element.css"
import Title from "../../UI/Title"
import { Element } from "react-scroll"
import { Carousel, Col, Row } from "react-bootstrap"
import { getPartners } from "./getPartners"

const Partners = () => {
  const partners = getPartners()

  return (
    <Element name="#partnereink" className="element">
      <Title id="header.partnereink" />
      <Row className="d-flex justify-content-center">
        <Col md={8}>
          <Carousel variant="dark" className="m-0">
            {partners.map((partner, index) => (
              <Carousel.Item key={index} className="my-5 text-center">
                <div className="d-flex flex-column align-items-center my-5">
                  <img
                    src={partner.src}
                    alt=""
                    className="w-100 rounded"
                    style={{ maxWidth: "75%" }}
                  />
                  <a className="mt-4 btn btn-warning btn-md" href={partner.url}>
                    {partner.url.substring(8).slice(0, -1)}
                  </a>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Element>
  )
}

export default Partners
