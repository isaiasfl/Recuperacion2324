import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'


const RootPage = () => {
    return (
        <>
        <Header />
        <hr />
        <Outlet/>
        <hr />
        <Footer />
        </>
      )
    }


export default RootPage