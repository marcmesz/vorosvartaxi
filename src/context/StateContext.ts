import { createContext } from "react"

const StateContext = createContext({
  state: { locale: "hu" },
  dispatch: ({ type, payload }: { type: string; payload: string }) => {
    return {
      type,
      payload
    }
  }
})
export default StateContext
