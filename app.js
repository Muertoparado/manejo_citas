import dotenv from 'dotenv';
import express from 'express';
import { appToken, appVerify} from './limit/token.js';

dotenv.config();
let app=express();
 app.use(express.json());
 app.use("/token", appToken);
 app.use("/prueba", initRoutes,appVerify);  
 app.use("/a", ()=>{
    console.log("dsfsf");
 })

 let config = JSON.parse(process.env.MY_SERVER);

 app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});