import { Link } from "react-scroll"
import LogoSrc from "../../images/logo4.png"

interface Props {
  duration?: number
}

const VorosvarTaxiLogo = ({ duration }: Props) => {
  return (
    <div className="menu-center">
      <Link
        activeClass="active-menu"
        to="#kezdolap"
        spy
        smooth
        duration={duration}
        style={{ cursor: "pointer" }}
      >
        <img src={LogoSrc} className="menu-logo" alt="" title="Vörösvár Taxi" />
      </Link>
    </div>
  )
}

export default VorosvarTaxiLogo
