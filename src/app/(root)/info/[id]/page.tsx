
import React from 'react'
import { getInfoById } from '@/lib/actions/data.action'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Page = async ({params}) => {
  
  const result = await getInfoById({infoId:params.id })
  return (
    <>
      <div className='w-min-screen h-screen  bg-gray-300'>
        <div className='w-full bg-gray-400 h-full p-10'>
          <div className='w-full flex flex-col justify-center items-center'>
             <div className=''>
              
                <p className='w-[35px] h-[35px] border border-gray-500 rounded-full flex items-center justify-center'>{result.getInfoById.FirstName.slice(0,2)}</p>
                <div>
                <p className='mt-4'>{result.getInfoById.FirstName} &nbsp;{result.getInfoById.LastName}</p>
                <p>{result.getInfoById.email}</p>
                <p>{result.getInfoById.phone}</p>
                <p className='w-[600px] mt-4'>{result.getInfoById.description}</p>
                 

                </div>
             </div>
             <div className='mt-2'>
            <Link href='/'>
                  <Button>Homepage</Button>
            </Link>
          </div>
              
          </div> 
          
        </div>
        
        
      </div>
    </>
  )
}

export default Page
