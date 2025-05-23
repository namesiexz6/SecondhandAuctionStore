import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from '../components/Admin/SidebarAdmin'
import HeaderAdmin from '../components/Admin/HeaderAdmin'
import Loading from "../utils/Loading";

const LayoutAdmin = () => {
    return (
        <div className='flex h-screen'>
            <SidebarAdmin />
            <div className='flex-1 flex flex-col'>
                <HeaderAdmin />
                <main className='flex-1 p-6
               bg-gray-100 overflow-y-auto'>
                    <Loading />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default LayoutAdmin