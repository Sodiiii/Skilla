import React from 'react'
import Sidebar from './sidebar/Sidebar'
import Table from './Table/Table'
import './MainTable.css'

const MainTable = () => {
  return (
    <div className='main_wrapper'>
        <Sidebar/>
        <Table/>
    </div>
  )
}

export default MainTable