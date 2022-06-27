import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/GlobalStream");

let database = mongoose.connection;

export default database;