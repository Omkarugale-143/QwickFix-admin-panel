import express from "express"
import mongoose from "mongoose"
import User from './routes/User.js'
import cors from "cors"
const server = express()
server.use(express.json())
server.use(cors());
main()
async function main() {
    await mongoose.connect('mongodb+srv://navin-admin:September1392@cluster0.u1nd2hc.mongodb.net/Qwick-Fix?retryWrites=true&w=majority').then(() => console.log("database connected"));
}
server.get('/', (req, res) => {
    res.status(200).json("hello , good morning!")
})
server.use('/user',User);
server.listen(8080, () => {
    console.log("server started at port 8080");
});