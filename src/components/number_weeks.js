import React,{useContext} from 'react'
import { GlobalContext } from './context'
import { useHistory } from 'react-router-dom'


const Number_Weeks = ()=>{

    const {push} = useHistory()

    const {dates,setDates,data,setData,display,setDisplay,error,setError,dueDate,setDueDate,percent,setPercent} = useContext(GlobalContext)

    const handleChanges = e=>{
        setDates({...dates,[e.target.name]:e.target.value})
    }

    // const calcDue = async (e)=>{
    //     e.preventDefault()
    //     const t1 = new Date(dates.d1).getTime()+24*1000*3600
    //     // const t2 = new Date().getTime()
    //     // due is 40 weeks total from last period in ms
    //     const t2 = await 40*7*24*3600*1000
    //     console.log('current date ',dates.d1)
    //     console.log('due date ',new Date(t1+t2))
    
    //     await setDueDate(new Date(t1+t2))
     
        



    // }

    const calcDue = async (e)=>{
        e.preventDefault()
        const t1 = new Date(dates.d1).getTime()
        const t2 = new Date().getTime()
        const dif = t2-t1
        const timeADay = await 1000*3600*24

        if (dif>0){
            // calculate current number of weeks and days
            const number_days = await parseInt((dif/timeADay))
            const w = await Math.trunc(number_days/7)

            const r = await number_days - w*7
            setPercent((w*7+r)/365)
            setData({weeks:w,days:r})

            // Calculate due date
            const time_end = await 40*7*24*3600*1000
            await setDueDate(new Date(t1+time_end))
            setDisplay(true)
            push('/dueDate')
        }
        else{
            setError("Invalid Dates entered")
        }
        


    }

    // console.log('dates input ',dates)

    return (
        <div>
        
            <form>
                
                <p className='error'>{error? error : null}</p>
               
                <div className='input_data'>
                    <label htmlFor='d1'>Last Period</label>
                    <input type='date' name='d1' value={dates.d1} onChange={handleChanges}/>
                </div>
               
                <div className='buttons'>
                    <button onClick={calcDue}> Submit </button>
                    {/* <button onClick={calcDue}>Due date</button> */}
                    <button onClick={(e)=>{
                        e.preventDefault();
                        setDisplay(false);
                        setError("");
                        setDueDate("")
                        }
                     }>Reset</button>
                </div>
                
            </form>

        </div>
    )
}
export default Number_Weeks