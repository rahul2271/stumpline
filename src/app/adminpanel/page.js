'use client'
import React from 'react'
import Dashboard from '../Components/dashboard'
import ProtectedRoute from '../ProtectedRoute';

const page = () => {
  return (
    <ProtectedRoute>
    <div>
        <Dashboard/>
    </div>
    </ProtectedRoute>
  )
}

export default page