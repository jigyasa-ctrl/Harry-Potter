
import React, { useState, useEffect } from "react";

import "./houseDetails.css";





function HouseDetails (props) {

    const [houseDetails, setHouseDetails] = useState([])

    const key ='?key=$2a$10$fsOoKnz6pFBFGckbmRPqy.NqTbR0OoYyCxoW5fUiHL2U4rZV/l1zm'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/houses/${props.match.params.house_id}${key}`)
        .then(res => res.json())
        .then(potter => {
            setHouseDetails(potter)
        })
    }, [props.match.params.house_id])

    if (houseDetails.length === 0) {
        return(
            <div className='loading'>
                LOADING...
            </div>
        )
    }
    return (
        <>
            <header>
                <h1 className='title'>{houseDetails[0].name}</h1>
               
            </header>
           
                <div className='house-details'>
                    <div className='housedetail'>
                    <h3 className='stats'>Stats:</h3>
                    <h4 className='bold'>House Founder:</h4>  <span>{houseDetails[0].founder}</span>
                    <br></br>
                    <h4 className='bold'>Head of House:</h4>  <span>{houseDetails[0].headOfHouse}</span>
                    <br></br>
                    <h4 className='bold'>House Ghost:</h4>   <span>{houseDetails[0].houseGhost}</span>
                    <br></br>
                    <h4 className='bold'>Mascot:</h4>   <span>{houseDetails[0].mascot}</span>
                    <br></br>
                    </div>
                   
                </div>
            
        </>
    )
}
  
export default HouseDetails;