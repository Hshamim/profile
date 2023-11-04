import Image from 'next/image';
import React from 'react';
import { deleteProfile } from '@/lib/actions/data.action';
import { usePathname, useRouter } from 'next/navigation';
interface Props{
    itemId: string
}

function EditDeleteAction({itemId}:Props) {
    const pathname = usePathname()
    const router = useRouter();
    const handleEdit = async () => {
       router.push(`/info/edit/${itemId}`)
    }
    const handleEditDelete = async () => {
        await deleteProfile({
            profileId : itemId,
            path : pathname
        })
    }
  return (
    <div className='flex gap-2'>
        <Image 
            src='/edit.svg'
            alt='Edit'
            width={20}
            height={10}
            className=' cursor-pointer'
            onClick={handleEdit}
        />
        <Image
            src='/delete.svg'
            alt='Delete'
            width={20}
            height={20}
            className=' cursor-pointer'
            onClick={handleEditDelete}
        />
    </div>
  )
}

export default EditDeleteAction