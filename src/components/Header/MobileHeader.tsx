import { useState } from "react"
import MobileIcon from "../../images/svg/ico-mobile-menu.svg?react"
import { Nav, Offcanvas } from "react-bootstrap"
import { Link } from "react-scroll"
import { FormattedMessage } from "react-intl"

interface Props {
  style?: {
    [key: string]: string
  }
  logo?: JSX.Element
  langIcon?: JSX.Element
}

const MobileHeader = ({ style, logo, langIcon }: Props) => {
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

  const navStyle: { [key: string]: string } = {
    ...(style || {}),
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    transition: "background-color 200ms",
    paddingTop: "env(safe-area-inset-top)",
    WebkitPaddingTop: "constant(safe-area-inset-top)"
  }

  return (
    <>
      <Nav
        className="d-lg-none z-2 d-flex justify-content-between align-items-center"
        style={navStyle}
      >
        {langIcon}
        {logo}
        <MobileIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShow(true)}
        />
      </Nav>
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
