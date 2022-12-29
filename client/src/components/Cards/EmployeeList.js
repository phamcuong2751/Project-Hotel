import React from 'react'

// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js'
import { useQuery } from 'react-query'
import axios from 'axios'

export default function EmployeeList() {
  const { isLoading, error, data, isFetching } = useQuery('users', () =>
    axios.get('http://localhost:5000/api/users/').then(res => res.data),
  )

  if (isLoading) return <p>Loading...</p>
  return (
    <div className={'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white'}>
      <div className='rounded-t mb-0 px-4 py-3 border-0'>
        <div className='flex flex-wrap items-center'>
          <div className='relative w-full px-4 max-w-full flex-grow flex-1'>
            <h3 className={'font-semibold text-lg text-blueGray-700'}>Employee List</h3>
          </div>
        </div>
      </div>
      <div className='block w-full overflow-x-auto'>
        {/* Projects table */}
        <table className='items-center w-full bg-transparent border-collapse'>
          <thead>
            <tr>
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                }
              >
                Username
              </th>
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                }
              >
                Start Date
              </th>
              <th
                className={
                  'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                }
              >
                Start Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(totalUser => (
              <tr>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.username}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.ngaybatdau}</div>
                </td>
                <td className={'px-6 py-4 whitespace-no-wrap border-b border-solid border-gray-200'}>
                  <div className={'text-sm leading-5 text-blueGray-900'}>{totalUser.ngaybatdau}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
