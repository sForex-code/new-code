import React from 'react'
import { Link } from 'react-router-dom'
import{ImSearch} from 'react-icons/im'
import Logo from '../netflix.png'



const Header = () => {
  return (
  <nav className='header'>
    <img src={Logo} alt="logo" />
    <div>
        <Link to='/TvShows'>Tv Shows</Link>
        <Link to='/Movies'>Movies</Link>
        <Link to='/MyFav'>My Fav</Link>
        <Link to='/Mylist'>My List</Link>
    </div>
  <ImSearch/>
 </nav>
  )
}

export default Header