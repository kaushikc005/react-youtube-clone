import React from 'react'
import { Stack,Box,Typography} from '@mui/material'
import {categories} from '../utils/constants.js'
const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack sx={{color:'#fff',marginRight:'1.5rem'}}>
      {categories.map((item) => (
        <Box key={item.name} className={selectedCategory===item.name
          ?'category--btn category--selected-btn'
        :'category--btn'}
       sx={{minWidth:'100%'}}

      onClick={()=> setSelectedCategory(item.name)}>
           <span className='category--btn-icon' >{item.icon}</span>
           <span className='category--btn-name'>{item.name}</span>
        </Box>
      ))}
      <Typography sx={{color:'#fff',fontSize:'1rem',
      fontWeight:'BOLD',paddingX:'5px',textAlign:'center'}}>
           Copyright @2023 kAUSHIK Chhetri
         </Typography>
    </Stack>
  )
}

export default Sidebar