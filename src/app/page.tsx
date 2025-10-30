import { Button } from '@/components/ui/button'
import prisma from '@/lib/db'

const page =  () => {
  return (
    <div className='min-h-screen min-w-screen flex justify-center items-center'>
      <Button>Click</Button>
    </div>
  )
}

export default page