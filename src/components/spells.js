import React, {useState, useEffect} from "react"
import './spells.css'



function Spells () {
    const [spells, setCharacters] = useState([])

    const key = '?key=$2a$10$fsOoKnz6pFBFGckbmRPqy.NqTbR0OoYyCxoW5fUiHL2U4rZV/l1zm'
    
    useEffect( () => {
        fetch(`https://www.potterapi.com/v1/spells${key}`)
        .then(res => res.json())
        .then(potter => {
            const spellNames = potter
            setCharacters(spellNames)
            console.log(spellNames)
        })
        
    }, []) /*bracket tells the prvious state, if same doesnt aply the effect*/

    
    const spellNames = spells.map(names => {
        return(
            <div className='spell-container' key ={names._id}>
                <div className='names'>
                   {names.spell}<i class="fas fa-magic"></i>
                   
                </div>
                <ul className='spells-list'>
                    <li className='spell-type'> {names.type}</li>
                    <li className='spell-effect'>{names.effect}</li>
                </ul>
                

            </div>
        )
    })
    return (
        <>
        <header>
            <h1 className='title'>Spells</h1>
        </header>
        <div className='spells-list'>
            {spellNames}
        </div>
        </>
    )
};
    export default Spells;