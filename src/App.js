import React from 'react';
import { Link } from 'react-router-dom'

import './App.css'


function App() {
  return (
    
    <div className="app">
    <div className='firstpage'>
<p>Hello, Wizards! Welcome to the Harry Potter fan page! Explore the world of Harry Potter. Learn about the different characters, houses and even spells. Also, take a chance with the sorting hat to see which house you'd be in if you were at Hogwarts!</p>
<Link to='/letter'>
   <button>Your Hogwart's Letter</button>
  </Link>
</div>
<div className='image-container'>
          <Link to='/spells'>
            <div className='overlay-container'>
            <img className='image' src= 'http://images4.fanpop.com/image/photos/20500000/Voldemort-Avada-Kedavra-harry-potter-20557632-1920-1080.jpg' alt=''></img>
            <div className='overlay'>
              <p>Spells</p>
            </div>
            </div>
          </Link>
          <Link to='/characters'>
          <div className='overlay-container'>
            <img className='image' src='http://getwallpapers.com/wallpaper/full/d/e/a/57864.jpg' alt='' />
            <div className='overlay'>
              <p>Characters</p>
            </div>
            </div>
          </Link>
          <Link to="/houses">
          <div className='overlay-container'>
            <img className='image' src='https://wallpapercave.com/wp/wp2182832.png' alt=''/>
            <div className='overlay'>
              <p>Houses</p>
            </div>
            </div>
          </Link>
          <Link to='/sortinghat'>
          <div className='overlay-container'>
            <img className='image' src='https://orig00.deviantart.net/4178/f/2013/338/6/8/pottermore_background__the_sorting_hat_by_xxtayce-d6wp8hm.jpg' alt=''/>
            <div className='overlay'>
              <p>Sorting hat</p>
            </div>
            </div>
          </Link>
          </div>
    </div>
  );
}

export default App;
