"use client"
import React from 'react'
import { Progress, Typography } from "@material-tailwind/react";
import { useRandomStore } from '@/store/randomstore';
 
export function ProgressLabelOutside() {
    const currentRuby = useRandomStore(state => state.currentRuby)
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          Completed ({currentRuby})
        </Typography>
        <Typography color="blue-gray" variant="h6">
        {Math.floor((currentRuby/10000)*100)}% (10K)
        </Typography>
      </div>
      <Progress value={Math.floor((currentRuby/10000)*100)} size='lg' label="Completed" color='red' />
    </div>
  );
}