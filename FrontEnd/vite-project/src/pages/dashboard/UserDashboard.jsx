import React from 'react'
import DashboardLayout from '../../layouts/DashboardLayout'
import Sidebar from '../../components/dashboard/Sidebar'
import StatCard from '../../components/dashboard/StatCard'
import { FaCoins, FaRecycle, FaTruck } from 'react-icons/fa'
import RequestPickupCard from '../../components/dashboard/RequestPickupCard'
import RecentPickups from '../../components/dashboard/RecentPickups'

function UserDashboard() {
  return (
    <>
    <DashboardLayout sidebar={<Sidebar/>}>
    <h1 className='text-2xl font-bold mb-1'>Welcome, Mayank</h1>
    <p className='text-gray-600 mb-6'>
        Track your waste management activity
    </p>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <StatCard title="Pickups" value="12" icon={<FaTruck/>}/>
        <StatCard title="Recycled" value="35 kg" icon={<FaRecycle/>}/>
        <StatCard title="Rewards" value="120" icon={<FaCoins/>}/>
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <RequestPickupCard/>
        <div className='bg-white rounded-xl p-6 shadow lg:col-span-2'>
            <h3 className='font-bold mb-2'>Your Location</h3>
            <p>Noida, India</p>
        </div>
    </div>
    <RecentPickups/>
    </DashboardLayout>
    </>
  )
}

export default UserDashboard