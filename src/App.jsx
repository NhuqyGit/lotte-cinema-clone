import { useState } from 'react'
import './App.scss'

import { Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Gift from './components/Gift';
import Ticket from './components/Ticket';
import Movie from './components/Movie';
import Cinema from './components/Cinema';
import Event from './components/Event';
function App() {


  return (
    <div className='App'>

        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/gift-shop' element={<Gift />}></Route>
          <Route path='/ticketing' element={<Ticket />}></Route>
          <Route path='/Movie' element={<Movie />}></Route>
          <Route path='/Cinema' element={<Cinema />}></Route>
          <Route path='/Event' element={<Event />}></Route>
        </Routes>
    </div>
  )
}

export default App
