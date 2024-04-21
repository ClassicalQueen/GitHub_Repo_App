import React from 'react'
import './App.css'
import Repositories from './Components/Repositories'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RepositoryDetail from './Components/RepositoryDetail'
import ErrorBoundary from './Components/ErrorBoundary'
import NotFound from "./Components/NotFound"

const App = () => {

  return (
   <ErrorBoundary>
      <Router>
      <Routes>
        <Route path='/' element={<Repositories/>}/>
        <Route path='/repository/:id' element={<RepositoryDetail />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>   
    </Router>
   </ErrorBoundary>
 
  )
}

export default App