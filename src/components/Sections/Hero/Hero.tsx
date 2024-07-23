import "./Hero.css"
import { MdCall } from "react-icons/md"
import { Element } from "react-scroll"

const Hero = () => {
  return (
    <Element className="hero" name="#kezdolap">
      <div className="animate-hero hero-content">
        <h1 className="hero-title fw-bold">VÖRÖSVÁR TAXI</h1>
        <a
          href="tel:+36309046252"
          className="hero-subtitle"
          title="Taxi rendelés"
        >
          <MdCall className="icon-phone" />
          <span>+36 30 904 6252</span>
        </a>
      </div>
    </Element>
  )
}

export default Hero
