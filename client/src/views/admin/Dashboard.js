import React from 'react'
import { useQuery, useQueryClient } from 'react-query'
import CardBarChart from '../../components/Cards/CardBarChart'
import CardPageVisits from '../../components/Cards/CardPageVisits'
import CardSocialTraffic from '../../components/Cards/CardSocialTraffic'
import CardLineChart from '../../components/Cards/CardLineChart'
import axios from "axios";

export default function Dashboard() {
  const { isLoading, error, totalUsers, isFetching } = useQuery("users", () =>
    axios.get(
      "http://localhost:5000/api/users/"
    ).then((res) => res.data)
  );
  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <CardLineChart />
        </div>
        <div className='w-full xl:w-4/12 px-4'>
          <CardBarChart />
        </div>
      </div>
      <div className='flex flex-wrap mt-4'>
        <div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'>
          <CardPageVisits />
        </div>
        <div className='w-full xl:w-4/12 px-4'>
          <CardSocialTraffic />
        </div>
      </div>
    </>
  )
}
