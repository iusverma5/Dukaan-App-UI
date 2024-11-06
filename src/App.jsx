import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './components/topbar'
import Overview from './components/overview'
import Transactions from './components/Transactions'
import Table from './components/Table'
import SideBar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-white-50 '>
       <SideBar/>
      <div className='border-b border-black-150 sm:pl-64 bg-white-500'>
        <Topbar/>
      </div>
      <div className='m-5 mb-0 sm:ml-64 grid gap-8'>
        <Overview/>
        <div className='grid gap-6'>
          <Transactions/>
          <Table/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
