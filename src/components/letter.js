import React from 'react'
import './letter.css'

function Letter() {
  return (
      <div className='letter-container'>
      <div className='letter-image'>
         {/*<img src='https://i.pinimg.com/736x/47/b5/67/47b567ff37393b5c564cbe1186e90662--vintage-paper-background-old-paper-texture.jpg'></img>
         */}
         <img src='https://lewisrogers.files.wordpress.com/2012/10/parchment-for-inside-page.gif' alt=''></img>
      </div>
      <div className='letter-content'>
      <img src='https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-black-white-10.png' alt=''></img>
      <h1>Hogwarts School of Wizcraft and Wizardy</h1>
      <h3>Headmaster: Lucius Acuelo</h3>
      <div>
      <p>Dear Wizard,</p>  
      <p>We are pleased to inform you that you have a place at Hogwarts School of Witchcraft and Wizardy</p>
      <p>Please find an enclosed list of all the necessary books and equipments. Term starts from January 2020. We await your owl no later than September 30.</p>
     <p>Your sincerely,</p>
     <p id='signature'>
         Minerva McGonagall
     </p>
     <p>Deputy Headmaster</p>
      </div>
          
      </div>
      
      </div>
  )
}

export default Letter;