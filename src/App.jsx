import React, {useState, useContext} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import {Home, Projects, Contact, About} from './pages'
import Navbar from './components/Navbar'
import { BASE } from '@/constants'

const App = () => {
	return (
		<main className="bg-slate-300/20 h-[100vh]">
			<Router>
				<Navbar />
				<Routes>
					<Route path={`/`} element={<Home />} />
					<Route path={`${BASE}/`} element={<Home />} />
					<Route path={`${BASE}/projects`} element={<Projects />} />
					<Route path={`${BASE}/contact`} element={<Contact />} />
					<Route path={`${BASE}/about`} element={<About />} />
				</Routes>
			</Router>
		</main>
	)
};

export default App;