import { createContext,useCallback,useState } from "react";

export const GlobalContext = createContext()


const ContextProvider = ({children})=>{
    const[dates,setDates] = useState({d1:new Date(),d2:new Date()})
    const[data,setData] = useState({weeks:0,days:0})
    const[display,setDisplay] = useState(false)
    const[dueDate,setDueDate] = useState()
    const[percent,setPercent]=useState(0) // progress percent
    const[error,setError] = useState()

    return (
        <GlobalContext.Provider value={{dates,setDates,data,setData,display,setDisplay,error,setError,dueDate,setDueDate,percent,setPercent}}>
            {children}
        </GlobalContext.Provider>
    )

}

export default ContextProvider