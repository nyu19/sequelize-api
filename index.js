import express from 'express';
import {app} from './src/app.js';


app.use(express.static("views"));
app.use("/css", express.static("public/css"));
app.use("/image", express.static("public/image"));
app.use("/js", express.static("public/js"));

const server = app.listen(3000, ()=>{
    console.log(`listening on ${server.address().port}`);
})