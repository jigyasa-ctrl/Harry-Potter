import React, {useState, useEffect} from 'react'
import './hat.css';

function Hat() {

    const [hat, setHat] = useState([])

    const key = '?key=$2a$10$fsOoKnz6pFBFGckbmRPqy.NqTbR0OoYyCxoW5fUiHL2U4rZV/l1zm'

    useEffect(() => {
        fetch(`https://www.potterapi.com/v1/sortingHat${key}`)
        .then(res => res.json())
        .then(potter => {
            setHat(potter)
        })
    },[])

    return(
        <>
        <div className='hat'>
            <h1>{hat}</h1>
    <p>Congratulations! you've been selected to be a member of {hat} house.</p>
        </div>
        </>
    )

}

export default Hat;

