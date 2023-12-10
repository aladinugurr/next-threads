import mongoose from 'mongoose'

let isConnected = false; //variable to check connection to mongoose

export const connectToDb = async() => {
    mongoose.set('strictQuery' , true);

    if(process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already connected to mongodb');
    
    try {

    } catch {
        
    }
}