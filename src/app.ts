import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {router} from './routes/route';
const app = express();


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

var port = process.env.PORT as any || 3000
app.listen(port, () => {
    console.log(`Listening to server at port ${port}`)
})