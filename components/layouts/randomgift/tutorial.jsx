"use client"
import { Button } from '@material-tailwind/react'
import React from 'react'

export default function Tutorial() {
  return (
    <div className='flex flex-col'>
        <p>Mỗi ngày bạn sẽ nhận được 1 lượt nhận quà miễn phí.</p>
        <p>Phần quà là có thật "chắc chắn là không không bịp !"</p>
        {/* <Button size='sm' color='green' className='w-[120px] rounded-md mt-4'>Kiểm tra quà</Button> */}
    </div>
  )
}
