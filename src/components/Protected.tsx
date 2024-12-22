import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Protected: React.FC = () => {
    let authrize = true;
    return (
        <div>
            {authrize ? <Outlet /> : <Navigate to='/login' />}
        </div>
    )
}

export default Protected
