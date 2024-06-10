// src/components/Chart.js

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Chart() {
  const areaChartData = [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 30 },
    { name: 'Mar', value: 20 },
    { name: 'Apr', value: 27 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 23 },
    { name: 'Jul', value: 34 },
  ];

  const barChartData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const totalEarningPercentage = 75; // You can adjust this value as needed

  return (
    <>
      <div className="p-4 space-y-4">
      <h1 className='text-2xl font-bold'>Chart</h1>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-3  gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
           
            <div className='flex justify-between'>
            <div className='flex flex-col'>
            <p className="text-sm font-bold text-[#6366F1] ">SALE</p>
            <p >90% ^</p>
            </div>
            <p className="text-xl font-bold">$3654.00</p>

          </div>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#6366F1" fill="#6366F1" />
              </AreaChart>
            </ResponsiveContainer>
            
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            
            <div className='flex justify-between'>
            <div className='flex flex-col'>
            <p className="text-sm font-bold text-[#FBBF24]">PROJECTS</p>
            <p >30% ^</p>
            </div>
            <p className="text-xl font-bold">12569</p>

          </div>
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#FBBF24" fill="#FBBF24" />
              </AreaChart>
            </ResponsiveContainer>
           
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
          <div className='flex justify-between'>
            <div className='flex flex-col'>
            <p className="text-sm font-bold text-[#10B981]">PRODUCTS</p>
            <p >68% ^</p>
            </div>
            <p className="text-xl font-bold">93M</p>

          </div>
            
            <ResponsiveContainer width="100%" height={100}>
              <AreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#10B981" fill="#10B981" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="text-center">
             
              
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md h-[350px]">
            <h2 className="text-xl font-bold text-gray-700">Marketing Expenses</h2>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart
                data={barChartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-gray-700 flex text-start mb-4">Total Earning</h2>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={totalEarningPercentage}
                text={`${totalEarningPercentage}%`}
                styles={buildStyles({
                  textColor: '#10B981',
                  pathColor: '#10B981',
                  trailColor: '#d6d6d6',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
