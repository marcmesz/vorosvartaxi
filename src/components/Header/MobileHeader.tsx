import { useState } from "react"
import MobileIcon from "./MobileIcon"
import { Offcanvas } from "react-bootstrap"
import { Link } from "react-scroll"
import { FormattedMessage } from "react-intl"

const MobileHeader = ({ style, logo, langIcon }) => {
  const [show, setShow] = useState(false)

  const navItems = [
    "header.kezdolap",
    "header.szolgaltatasok",
    "header.partnereink",
    "header.kapcsolat"
  ]

  const handleNavItemClick = () => {
    setShow(false)
  }

  return (
    <>
      <nav className="nav-mobile d-md-none" style={style}>
        <div className="menu">
          {langIcon}
          {logo}
          <span style={{ cursor: "pointer" }} onClick={() => setShow(true)}>
            <MobileIcon />
          </span>
        </div>
      </nav>
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end">
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`#${item.split(".")[1]}`}
              spy
              smooth
              duration={100}
              className="btn w-100 mb-2 py-3 btn-warning text-uppercase fw-bold fs-5"
              onClick={handleNavItemClick}
              href={`#${item.split(".")[1]}`}
            >
              <FormattedMessage id={item} />
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default MobileHeader
