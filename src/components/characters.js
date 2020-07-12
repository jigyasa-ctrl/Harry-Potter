import React, {useState, useEffect} from 'react'
import "./characters.css"

function Characters() {


    const [characters, setCharacters]= useState([])

    const key = '?key=$2a$10$fsOoKnz6pFBFGckbmRPqy.NqTbR0OoYyCxoW5fUiHL2U4rZV/l1zm'

    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/characters${key}`)
        .then(res=> res.json())
        .then(potter => {
            setCharacters(potter)
            console.log(potter)
        })
    }, [])

    const charNames = characters.map(names => {
        return(
            <div key={names.name}>
                {names.name}
            </div>
        )
    })
    return(
        <>
        <header>
            <h1 className='title'>Characters</h1>
            </header>
            <div className='chars-list'>
                {charNames}

            </div>
            </>
        
    )

    

}

export default Characters;