import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { router } from "./src/routes/route";
import cors from 'cors';
import bodyParser from "body-parser";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/product_management').then(() => {
    console.log('Connect success!')
}).catch(e => {
    console.log(e);
})
app.use('', router);

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})