import mongoose from "mongoose";

const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Restaurant",
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log("Database connection failed", error);
    });
}
export default dbConnection;