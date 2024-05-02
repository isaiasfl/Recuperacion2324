import { useState } from "react"
import GlobalContext from "./GlobalContext"

const GlobalProvider = ({children}) => {
    const [appState, setAppState] = useState({token: false})
  return (
    <GlobalContext.Provider value={{appState, setAppState}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
