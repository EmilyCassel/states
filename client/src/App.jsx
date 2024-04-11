import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {Header, Footer} from './components'

import { Home, Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, NewHampshire, NewJersey, NewMexico, NewYork, NorthCarolina, NorthDakota, Ohio, Oklahoma, Oregon, Pennsylvania, RhodeIsland, SouthCarolina, SouthDakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, WestVirginia, Wisconsin, Wyoming, Test, DC }  from './pages'

export default function App() {
    return (
        <>
            {/* <main className={`pageLayout ${location.pathname === '/'
            ? 'mainBackground'
            : 'defaultBackground'}`
            }></main> */}
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}