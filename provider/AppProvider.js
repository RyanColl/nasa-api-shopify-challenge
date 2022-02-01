import React from 'react'
import { createContext, useState } from 'react'

// provider created
export const AppProvider = createContext()
// provider component created
function AppContext({children}) {
    const initialState = {
        data: [], page: 0, filter: '', manifestData: {}
    }
    const [state, dispatch] = useState(initialState)
    return (
        <AppProvider.Provider value={{state, dispatch}}>
            {children}
        </AppProvider.Provider>
    )
}

export default AppContext