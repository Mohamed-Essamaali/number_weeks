import React,{useContext} from 'react'
import { GlobalContext } from './context'


const DisplayData = ()=>{

    const {dueDate, display,data} = useContext(GlobalContext)
    
    

    return(
        <div className = 'display_data'>
            {dueDate ?
            <div className='display-container'>

            <h3>Due Date is: {dueDate.toDateString()}</h3>

                <div className='display-weeks'>

                    <h2>Current weeks </h2>
                    <div>{data.weeks} weeks</div>
                    <div>{data.days} days</div>
               
                </div>
            </div>
        : 
        null
       
        }

        </div>
    )
        
}

export default DisplayData