import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'

import {ChannelDetails, Home,Navbar,SearchFeed, VideoDetails} from './components/index'
import { useState } from 'react';
function App() {
  
  const [selectedCategory, setSelectedCategory] = useState('New');
  return (
    <Router>
     <Navbar setSelectedCategory={setSelectedCategory}/>
      <Routes>
            <Route path='/' element={<Home 
            selectedCategory={selectedCategory}  setSelectedCategory={setSelectedCategory}/>} />
            <Route path='/search/:searchTerm' element={<SearchFeed/>} />
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
      </Routes>
    </Router>
  )
}

export default App
