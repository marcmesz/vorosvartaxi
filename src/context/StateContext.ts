import { createContext } from "react"
import { Action, SupportedLocale } from "../reducers"

export interface StateContextType {
  state: {
    locale: string
  }
  dispatch: React.Dispatch<Action>
}

const StateContext = createContext<StateContextType>({
  state: { locale: "hu" as SupportedLocale },
  dispatch: () => null
})

export default StateContext
