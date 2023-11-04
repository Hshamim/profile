"use client"

  import Link from "next/link"
  import EditDeleteAction from "./editdeleteaction"

  interface Props{
    FirstName:String,
    LastName:String,
    email:String, 
    phone:String,
    id:String
  }

function infoTable  ({FirstName,LastName,email,phone,id}:Props){

    return (
    <div className="w-full h-full flex justify-center items-center">
            <div className="w-[600px] h-[50px] bg-gray-200 p-7 mb-2">
                <div className=" flex justify-between items-center">
                    <div className=" w-[25px] h-[25px] p-2 border border-gray-400 rounded-full flex  justify-center items-center">
                      {FirstName.slice(0,2)}
                    </div>
                    <div className="w-1/2 flex  items-center text-center">
                        {FirstName} <span>&nbsp;{LastName}</span>
                    </div>
                    <Link href={`/info/${id}`} className=" text-red-400 mr-[20px]">view profile</Link>
                    {/* <Link href='/personalInfo' className=" text-red-400 mr-[50px]">create profile</Link> */}
                    <EditDeleteAction itemId={id}/>

                </div>   
            </div>
    </div>
    )
}
export default infoTable;