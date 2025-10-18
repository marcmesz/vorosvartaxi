import "./Header.css"
import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import MobileHeader from "./MobileHeader"
import LangIcon from "./LangIcon"
import VorosvarTaxiLogo from "./VorosvarTaxiLogo"
import { FormattedMessage } from "react-intl"

export default function Header() {
  const navItemsLeft = ["header.kezdolap", "header.szolgaltatasok"]
  const navItemsRight = ["header.partnereink", "header.kapcsolat"]
  const menuClasses = "menu-link menu-item"
  const duration = 100

  const [navSize, setnavSize] = useState("4rem")
  const [navColor, setnavColor] = useState("transparent")
  const [navScroll, setnavScroll] = useState("")

  const listenScrollEvent = () => {
    window.scrollY > 10
      ? setnavColor("rgba(0,0,0,0.8)")
      : setnavColor("transparent")
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("4rem")
    window.scrollY > 10 ? setnavScroll("nav-scroll") : setnavScroll("")
  }

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => {
      window.removeEventListener("scroll", listenScrollEvent)
    }
  }, [])

  return (
    <>
      <nav
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all 800ms"
        }}
        className={`${navScroll} d-none d-lg-block`}
      >
        <div className="container menu">
          <div className="menu-left">
            {navItemsLeft.map((link, index) => {
              return (
                <Link
                  key={index}
                  activeClass="active-menu"
                  to={`#${link.split(".")[1]}`}
                  className={menuClasses}
                  spy
                  smooth
                  duration={duration}
                >
                  <FormattedMessage id={link} />
                </Link>
              )
            })}
          </div>

          <VorosvarTaxiLogo duration={duration} />

          <div className="menu-right">
            {navItemsRight.map((link, index) => {
              return (
                <Link
                  key={index}
                  activeClass="active-menu"
                  to={`#${link.split(".")[1]}`}
                  className={menuClasses}
                  spy
                  smooth
                  duration={duration}
                >
                  <FormattedMessage id={link} />
                </Link>
              )
            })}
          </div>
        </div>
        <LangIcon />
      </nav>
      <MobileHeader
        style={{
          backgroundColor: navColor
        }}
        langIcon={<LangIcon />}
        logo={<VorosvarTaxiLogo duration={duration} />}
      />
    </>
  )
}
