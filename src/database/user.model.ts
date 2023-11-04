import { Schema , model , models , Document } from "mongoose";

export interface userInfo extends Document {
    userId: string,
    username : string,
    email : string,
    password : string,
    joinedAt : Date,

    }


const userInfoModel = new Schema({
    userId : {
        type : String,
        unique : true,
        required: true
    },
    username : {
        type : String,
        unique : true,
        required : true,
    },
    email : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
    },
    createAt : {
        type : Date,
        default : Date.now(),
    }
})

const userModel = models.userModel || model('userModel', userInfoModel);

export default userModel;