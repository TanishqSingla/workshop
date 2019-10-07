//npm install express
//npm install path

// this is not a production level app this is just a demo to show how req res works behind the scenes

const express = require('express');
const path = require('path');
const app = express();

const request = require('request');

const publicDirectoryPath = path.join(__dirname, './public');
const port = 3000;

//app.use is a middleware which acts on every request sent to server
//we can use middleware either for all requests or for specific request
app.use(express.static(publicDirectoryPath));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/weather",function(req,res){
    //API CALL or any xml request is an async task therefore we need to make a call back or promise
    let temp = tellWeather(req.query.city,function(temp){
        console.log(temp);
        if(temp == undefined)
        {
            res.status(400).send({
                error:"there is an error"
            });
        }else{
            //by default if we don't set any status it is 200
            res.status(200).send({
                result:temp
            });
        }
    });
})

app.listen(3000,function(){
    console.log("server is up at " + port);
})

function tellWeather(cityName,callback){
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID={PUT YOUR API KEY HERE}`;
    request({url:url,json:true},(error,response)=>{
        if(error)
        {
            return ;
        }
        const temp = response.body.main.temp;
        callback(temp);
    })
}