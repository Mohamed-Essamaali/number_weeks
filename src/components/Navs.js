import React,{useState} from 'react'
import { Link,Route } from 'react-router-dom'

const Navs = ()=>{


    return (
        <div className='navs'>
            <Link to='/main'>Home</Link>
            <Link to = '/weeks'>Find out due Date</Link>

        </div>
    )
}

export default Navs