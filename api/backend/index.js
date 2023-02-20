import express from 'express';
import conn from "./conexion.js";
import bodyParser from 'body-parser';
import cors from "cors";

const app = express();
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/calcular201213487',function(req,res){
    let num1 = Number(req.query.num1);
    let num2 = Number(req.query.num2);

    res.json(
        {
            "suma": num1+num2
        }
    );
});

app.get('/info', (req, res) => {    
    res.json(
        {
            "carnet": "201213487"
        }
    );
});


app.listen(4000);
console.log("Server running on port 4000");