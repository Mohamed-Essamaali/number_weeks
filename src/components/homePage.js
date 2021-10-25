import React,{useState} from "react"
import '../App.css';
import { Card,CardImg } from "reactstrap";
import img from "../newBorn.jpg"
import { useHistory } from "react-router-dom";


const HomePage = ()=>{
    const {push} = useHistory();
   
    const[name,setName] = useState("");
    var names = ["Hedaya","Nor Alhuda","Razan","Amira"];
    const luckyName(){
      var x = Math.random()*names.length;
        setName(names[Math.ceil(x)-1]);
    }
     

    console.log(names[Math.ceil(x)-1]);


    return (
        <div className='home'>
            
            <h1>Choose your Lucky Name</h1>
            <h4> {name}</h4>
        
            <button onClick={luckyName}> My Luck </button>
            
            <h1>Find out what you need</h1>
            <CardImg src={img} alt="can't find it"/>
            <button className='start-button' onClick={()=>{push('/links')}}>More Info</button>



        </div>
    )
}

export default HomePage
