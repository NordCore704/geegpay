import React from 'react'
import { Navbar } from '@/exports'

const SharedLayout = ({children}) => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <Navbar />
        {children}
    </div>
  )
}

export default SharedLayout