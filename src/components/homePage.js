import React from "react"
import '../App.css';
import { Card,CardImg } from "reactstrap";
import img from "../newBorn.jpg"
import { useHistory } from "react-router-dom";


const HomePage = ()=>{
    const {push} = useHistory()


    return (
        <div className='home'>
            <h1>Find out what you need</h1>
            <CardImg src={img} alt="can't find it"/>
            <button className='start-button' onClick={()=>{push('/links')}}>More Info</button>



        </div>
    )
}

export default HomePage