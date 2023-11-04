'use server'


import { connectToDb } from "./mongoose"
import InfoModel from "@/database/info.model";
import { Info_get } from "./shared.types";
import { revalidatePath } from "next/cache";



export async function getInfo(params:any) {
  try {
    connectToDb();
    const getInfos = await InfoModel.find({})
    return {getInfos};
  }catch(error){
    console.log(error);
    throw error;
  }finally{

  }
};

export async function createInfo(params:any) {
  try{
    connectToDb();
    const { FirstName , LastName , email , phone, gender, description  } = params;
    const info = await InfoModel.create({
      FirstName,
      LastName,
      email,
      phone,
      gender,
      description
    })
    console.log(info)
    
    
  }catch(error){
    console.log(error)
  }finally{

  }
}

export async function getInfoById(params:any) {
  try {
    connectToDb();
    const {infoId} = params;
    const getInfoById = await InfoModel.findById(infoId)
    console.log(getInfoById)
return {getInfoById};
  }catch(error){
    console.log(error);
    throw error;
  }finally{

  }
};

export async function deleteProfile(params:any){

  try{
    
  connectToDb();
  const {profileId, path} = params;
  await InfoModel.deleteOne({profileId});
  revalidatePath(path)

  }catch(error){
    console.log(error)
  }finally{

  }
}