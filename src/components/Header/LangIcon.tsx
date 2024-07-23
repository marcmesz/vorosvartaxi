import EN from "../../images/uk.png"
import HU from "../../images/hu.png"
import DE from "../../images/de.png"

const LangIcon = ({ handleLanguage, lang, state, isMobile }) => {
  return (
    <div
      className="language-icon"
      onClick={handleLanguage}
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
