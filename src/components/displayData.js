import React,{useContext} from 'react'
import { GlobalContext } from './context'





const DisplayData = ()=>{

    const {dueDate, display,data,percent} = useContext(GlobalContext)
    
    

    return(
        <div className = 'display_data'>
            {dueDate ?
            <div className='display-container'>

            <h3>Due Date is: {dueDate.toDateString()}</h3>
                <div className='progress'>
                    <h4>Current progress </h4>
                    <p><progress value={percent}/>
                    <span>{parseInt(percent*100)} %</span></p>
                </div>
                
                <div className='display-weeks'>

                    <h2>Current weeks </h2>
                    <div>{data.weeks} weeks</div>
                    <div>{data.days} days</div>
               
                </div>

                <div className='circular'>
                    <div className='inner'>
                        <div className='circle'>
                            <div className="left bar">
                                <div className='number'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        : 
        null
       
        }

        </div>
    )
        
}

export default DisplayData