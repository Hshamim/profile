import React from 'react'
import { getInfo } from '@/lib/actions/data.action';
import InfoTable  from '@/components/shared/infotable';
async function Home (){
    
 const result  = await getInfo({});
 
 console.log(result)
  return (
    <div className="w-full lg:w-10/12 mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          {
            result.getInfos.length > 0 ?
            result.getInfos.map((Infos)=>(
                <InfoTable
                  key={Infos._id}
                  FirstName={Infos.FirstName}
                  LastName = {Infos.LastName}
                  email= {Infos.email}
                  phone= {Infos.phone}
                  id = {Infos._id}
                />
            )):
            <p>
                nothing to show
            </p>
          }
      </div>
  </div>
  )
}

export default Home
