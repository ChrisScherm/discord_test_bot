const fetch = require('node-fetch');

module.exports = async function (msg, args){
    let keywords = 'Menlo Park';
    let lat;
    let lon;
    if (args.length > 0) {
        keywords = args.join(" ");
        if (keywords == "Menlo Park"){
             lat = 37.45023907353607;
             lon = -122.17859305112614;
        }
        else if (keywords == "Los Angeles"){
             lat = 34.05656410497833;
             lon = -118.3527414410373;
        }
        else if (keywords == "New York"){
             lat = 40.74788151393306;
             lon = -73.98449424904085;
        }
        else{
            msg.channel.send("Please enter one of the following locations: Menlo Park, Los Angeles, or New York.")
            console.log("error not a predefined location");
            error();
        }
    }
    else{
         lat = 37.45023907353607;
         lon = -122.17859305112614;
    }


    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=imperial&appid=${process.env.OPENWEATHERKEY}`
    let response = await fetch(url);
    let json = await response.json();

    //console.log(json);

    //console.log("lat:  " + lat);
    //console.log("lon:  " + lon);
    //console.log("current weather:  " + json.current.weather.id);
    
    // for (x in json.current.weather){
    //     console.log(json.current.weather[x]);
    //     console.log("x = " + x);
    // }
    
    msg.channel.send("Weather in: " + keywords);
    msg.channel.send("Degrees Fahrenheit: " + json.current.temp + " . Current weather: " + json.current.weather[0]['main']);
    
   
}
