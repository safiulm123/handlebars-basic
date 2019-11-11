const app = require("express")()
const path = require('path')

console.log("app set")
app.set("views",path.join(__dirname,"views"))
app.set("view engine","hbs")


console.log("get / set")
app.get("/",(req,res)=>{
    let PeopleList=RandomList();
    res.render("index",{people : PeopleList})
})

let RandomList=()=>{
    let list = ["test","awesome","Safi","is"]
    let limit = Math.floor(Math.random()*(list.lenght-1-0)+0);

    return list.slice(limit)
}

console.log("running on port 5000")
app.listen(5000);