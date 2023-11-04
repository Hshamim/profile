import mongoose from 'mongoose';

let isConnected: boolean = false;

export const  connectToDb =async () => {
    mongoose.set( 'strictQuery' , true)

    if(!process.env.MONGODB_URL){
        
        return console.log('MISSING MONGO_DB URL')
    }
    if(isConnected){
        return console.log('MONGODB already connected ')
    }
    try{
        await mongoose.connect( process.env.MONGODB_URL,{
            dbName: 'crud'
        })
        isConnected =  true;
        console.log('MONGODB is connected ')
    }catch(error){
        console.log('mongodb connection failed')
    }
}