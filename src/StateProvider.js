//setting up the data layer


// here we will track our basket 
import {createContext , useContext , useReducer} from "react"

//-> this is the data layer
export const StateContext = createContext()

export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext(StateContext);