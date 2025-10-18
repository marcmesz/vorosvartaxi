export type Action = { type: string; payload?: string }
export type SupportedLocale = "hu" | "en" | "de"

const initialState = {
  locale: "hu" as SupportedLocale
}

const rotateLocales: Array<SupportedLocale> = ["hu", "en", "de"]

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_LOCALE":
      return {
        ...state,
        locale:
          rotateLocales[
            (rotateLocales.indexOf(state.locale) + 1) % rotateLocales.length
          ]
      }

    default:
      return state
  }
}

export { reducer, initialState }
