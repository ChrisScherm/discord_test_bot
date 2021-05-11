
const fetch = require('node-fetch');

module.exports = async function(msg, args){

    let keywords = 'happy duck';
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8&contentfilter=high`
    let response = await fetch(url);
    let json = await response.json();

    //console.log(json);

    const index = Math.floor(Math.random() * json.results.length);

    msg.channel.send(json.results[index].url);
    msg.channel.send("GIF from Tenor: " + keywords);

}