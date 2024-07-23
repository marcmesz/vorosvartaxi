import EN from "../../images/uk.png"
import HU from "../../images/hu.png"
import DE from "../../images/de.png"
import { useContext } from "react"
import StateContext from "../../context/StateContext"

interface Props {
  setLocale: () => void
  lang: string
  isMobile?: boolean
}

const LangIcon = ({ setLocale, lang, isMobile }: Props) => {
  const { state } = useContext(StateContext)
  return (
    <div
      className="language-icon"
      onClick={setLocale}
      title={lang === "hu" ? "Magyar" : lang === "en" ? "English" : "Deutsch"}
    >
      <span className={isMobile ? "d-block" : ""}>
        {state.locale.toUpperCase()}
      </span>
      <img
        width="26px"
        src={lang === "hu" ? HU : lang === "en" ? EN : DE}
        alt=""
      />
    </div>
  )
}

export default LangIcon
