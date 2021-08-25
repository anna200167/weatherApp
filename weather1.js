const express = require('express') ;
const https = require('https');

const app = express();


app.get('/',(req,res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=vadodara&appid=f2b4162920a093cb98ce8c4195a36ce9"
    https.get(url,function(response){
     response.on("data",function(data){

            const weatherData = JSON.parse(data);
            const humidity = weatherData.main.humidity;
            const logo  = weatherData.weather[0].icon;
        const img = "http://openweathermap.org/img/wn/";
        const image = img+logo+"@2x.png";
     res.write("<p>The temprature is " + weatherData.weather[0].description+"</p>");
            res.write("<h1>the humidity is " + humidity + "</h1>");
            res.write("<img src="+image + ">");
            res.send();
        })
    })
});


app.listen(3000);