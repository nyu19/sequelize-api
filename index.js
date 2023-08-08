import express from 'express';
import {app} from './src/app.js';


app.use(express.static("views"));
app.use("/css", express.static("public/css"));
app.use("/js", express.static("public/js"));
app.use("/image", express.static("public/image"));

const server = app.listen(3000, ()=>{
    console.log(`🚀 Express server running on http://localhost:${server.address().port}`);
})
