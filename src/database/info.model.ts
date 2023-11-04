
import { Schema, model, models, Document } from "mongoose";

export interface Info extends Document{
    FirstName : string,
    LastName : string,
    email : string,
    phone : string,
    gender : string,
    description : string,
    createAt : Date,

}
const infoSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createAt : {
        type : Date,
        default : Date.now(),
    }
});

const InfoModel = models.InfoModel || model('InfoModel', infoSchema )

export default InfoModel;