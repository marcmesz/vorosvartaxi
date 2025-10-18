import EN from "../../images/uk.png"
import HU from "../../images/hu.png"
import DE from "../../images/de.png"
import { useContext } from "react"
import StateContext from "../../context/StateContext"

const LangIcon = () => {
  const { state, dispatch } = useContext(StateContext)
  const { locale } = state
  return (
    <div
      className="language-icon"
      onClick={() => dispatch({ type: "SET_LOCALE" })}
      title={
        locale === "hu" ? "Magyar" : locale === "en" ? "English" : "Deutsch"
      }
    >
      <span className={""}>{state.locale.toUpperCase()}</span>
      <img
        width="26px"
        src={locale === "hu" ? HU : locale === "en" ? EN : DE}
        alt=""
      />
    </div>
  )
}

export default LangIcon
