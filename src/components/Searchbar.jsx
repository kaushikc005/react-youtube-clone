import React,{useState} from 'react'
import { Stack,Box,IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import {logo} from '../utils/constants'

const Searchbar = () => {
  const [searchTerm,setSearchTerm]=useState('');
  
  const navigate=useNavigate()

  const handleSubmit=(event)=>{
    event.preventDefault();
    if(searchTerm)
    { 
      navigate(`/search/${searchTerm}`)
    }

    setSearchTerm('')
    
  }
  
  return (
       <Box>
         <Paper component='form' onSubmit={handleSubmit} 
         sx={{width:'400px',background:'#fff',padding:'5px',display:'flex',borderRadius:'25px',marginRight:'1.75rem'}}>
         <input 
         type="text" 
         placeholder="Search"
         value={searchTerm}
         onChange={(event) => setSearchTerm(event.target.value)}
         style={{border:0,outline:0,background:'transparent',paddingLeft:'10px',width:'90%'}}/>
        <IconButton type='submit'>
          <Search sx={{color:'#FC1503'}}/>
        </IconButton>
      </Paper> 
    </Box>
  )
}

export default Searchbar;