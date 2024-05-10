"use client"
import { Button } from '@material-tailwind/react'
import React from 'react'

export default function ButtonReadMore() {
  return (
    <Button variant="text" className="items-center gap-2 hidden lg:flex">
    Xem thêm{" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  </Button>
  )
}
