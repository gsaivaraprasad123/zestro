import { Button } from '@/components/ui/button'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
      <Button variant={'destructive'}>Hello</Button>
    </div>
  )
}

export default page