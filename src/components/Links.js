import React  from "react"
import {Link} from 'react-router-dom'

const UsefullLinks = ()=>{

    return (
        <div className='links'>
            <h2>Usefull websites for references</h2>
            <Link onClick={()=>window.open('https://www.pregnancycenter.org/')}> https://www.pregnancycenter.org/</Link>
            <Link onClick={()=>window.open('https://www.webmd.com/baby/default.htm')}> https://www.webmd.com/baby/default.htm</Link>
       

        </div>
    )
}

export default UsefullLinks