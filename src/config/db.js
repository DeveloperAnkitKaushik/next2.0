import mongoose from "mongoose";

const MongoDbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }
}

export default MongoDbConnection;