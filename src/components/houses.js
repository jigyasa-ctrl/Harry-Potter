import React, {useState, useEffect} from 'react'
import './houses.css'
import {Link} from 'react-router-dom'
function Houses() {

    const [houses, setHouses] = useState([])

    const key = '?key=$2a$10$fsOoKnz6pFBFGckbmRPqy.NqTbR0OoYyCxoW5fUiHL2U4rZV/l1zm'

    useEffect(() => {
        fetch(`https://www.potterapi.com/v1/houses${key}`)
        .then(res => res.json())
        .then(potter => {
            setHouses(potter)
        })
    }, [])

    const housenames = houses.map(house => {
        const houseId = house._id
        return(
        <div className='houses-names' key={house._id}>
            <Link to={'/houses/' + house._id} house={houseId} className='houses-link'>
            <p>{house.name}</p>
            
            </Link>
        </div>
        )
    })
    return (
         <header>
             <h1 className='title'>Houses</h1>
        <div>
            {housenames}
        </div>
         </header>
    )
}

export default Houses
