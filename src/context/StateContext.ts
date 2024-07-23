import { createContext } from "react"
import { Action } from "../reducers"

export interface StateContextType {
  state: {
    locale: string
  }
  dispatch: React.Dispatch<Action>
}

const StateContext = createContext<StateContextType>({
  state: { locale: "hu" },
  dispatch: () => null
})

export default StateContext
