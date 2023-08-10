import express from "express"
import bodyParser from "body-parser"
import ejs from "ejs"
import {dirname} from "path"
import  {fileURLToPath} from "url";
import _ from "lodash"
const __dirname = dirname(fileURLToPath(import.meta.url));

let current=[];
let routine=[];


const app = express();
const port = 3000; 
app.set('views engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",  (req, res)=>{
    res.render("./home.ejs", {
        current:current,
        routine:routine
    } );
})
app.post("/",  (req, res)=>{
    if (req.body.currentTask) {
        const currentText = req.body.currentTask;
        current.push(currentText);
        res.redirect('/')
        
    } else if (req.body.routineTask) {
        const routineText = req.body.routineTask;
        routine.push(routine);
        res.redirect("/")
    }
    
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`); 
})