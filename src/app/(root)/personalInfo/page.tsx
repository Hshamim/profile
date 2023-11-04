import InfoForm from '@/components/shared/infoform'
import Link from 'next/link'
import React from 'react';
import { Button } from '@/components/ui/button';

async function Info( ){
  return (
    <div className='w-full h-screen '>
      <div className='flex flex-col justify-center items-center mt-[100px]'>
        <h1 className=' font-bold text-black capitalize'>
          personal information
        </h1>
        <Link href='/'>
          <Button>
            Homepage
          </Button>
        </Link>
        <InfoForm />
      </div>
    </div>
  ) 
}

export default Info
