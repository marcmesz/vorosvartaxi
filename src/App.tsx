import "./App.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Sections/Hero/Hero"
import Introduction from "./components/Sections/Introduction/Introduction"
import Services from "./components/Sections/Services/Services"
import Partners from "./components/Sections/Partners/Partners"
import Contact from "./components/Sections/Contact/Contact"
import { useReducer } from "react"
import { reducer, initialState } from "./reducers"
import StateContext from "./context/StateContext"
import { IntlProvider } from "react-intl"
import messages_hu from "./lang/hu.json"
import messages_en from "./lang/en.json"
import messages_de from "./lang/de.json"

interface Messages {
  [key: string]: {
    [key: string]: string
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const locale = state.locale

  const messages: Messages = {
    hu: messages_hu,
    en: messages_en,
    de: messages_de
  }

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <div className="App">
          <Header />
          <Hero />
          <Introduction />
          <Services />
          <Partners />
          <Contact />
          <Footer />
        </div>
      </IntlProvider>
    </StateContext.Provider>
  )
}

export default App
