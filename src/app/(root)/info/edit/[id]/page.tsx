import InfoForm from '@/components/shared/infoform'
import { getInfoById } from '@/lib/actions/data.action'
import React from 'react'

 async function  Page({params}:propsParams) {

    const itemId = await getInfoById(params._id)
    const result = await getInfoById({params:params._id})
  return (
    <>
        <div className='flex flex-col justify-center items-center mt-[100px]'>
            <InfoForm
                type = "Edit"
                itemId= {itemId}
                infoDetails = { JSON.stringify(result)}
            />
        </div>
        
    </>
  )
}

export default Page