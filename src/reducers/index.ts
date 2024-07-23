interface Action {
  type: string
  payload: string
}

const initialState = {
  locale: "hu"
}

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case "SET_LOCALE":
      return {
        ...state,
        locale: action.payload
      }

    default:
      return state
  }
}

export { reducer, initialState }
