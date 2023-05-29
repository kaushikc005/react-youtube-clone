import React from 'react'
import { Stack} from '@mui/material'
import { Link} from 'react-router-dom'
import {Searchbar} from './index'
import {logo} from '../utils/constants'

const Navbar = ({setSelectedCategory}) => {

  // const handleSubmit=(event)=>{
  //   event.preventDefault();
  //   if(searchTerm)
  //   { 
  //     navigate(`/search/${searchTerm}`)
  //   }

  //   setSearchTerm('')
    
  // }
  
  return (
    <Stack direction='row' sx={{justifyContent:'space-between',
    padding:'20px',
    position:'sticky',
    top:0,

    zIndex:100,
    background:'#000'}}>
       <Link to='/' >
         <img src={logo} alt='youtube-logo' width="45px" style={{cursor:'pointer'}} 
         onClick={()=>setSelectedCategory('New')}/>
       </Link>
      
       <Searchbar />
       
    </Stack>
  )
}

export default Navbar;