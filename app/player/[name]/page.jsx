"use client"
import { getLogs } from '@/actions/logAction'
import { DefaultSkeleton } from '@/components/default/skeleton'
import Cardlog from '@/components/layouts/loglist/cardlog'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Card, Typography } from '@material-tailwind/react'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Player() {
  const params = useParams()
  const [isLoading,setIsLoading] = useState(true)
  const [list,setList] = useState()

  useEffect(() => {
    setIsLoading(true)
    const get = async () => {
      console.log(params?.name)
      const result = await getLogs(params?.name)
      console.log(result)
      if(result?.status === 200){
        setList(result?.data)
        setIsLoading(false)
      }
    }
    get()
  }, [])
  
  return (
    <Card className='my-6 mx-2 p-4 border-t min-h-[600px]'>
      <Typography as="string" variant='h5'>Nhật ký của #{params?.name}</Typography>
      <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 gap-4'>
        {
          list?.map(item => (
            <Cardlog key={item?.id} data={item} />
          ))
        }
      </div>
      {list?.length === 0 && <div className='h-[240px] flex items-center justify-center flex-col'>
        <InformationCircleIcon className='w-12 h-12' />
        <p className='text-center'>Người chơi này chưa thêm nhật ký !</p>
        </div>}
      {isLoading && <DefaultSkeleton />}
    </Card>
  )
}
