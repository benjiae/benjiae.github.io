const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/benjae_/latest-song`;
const playing = document.getElementById("listening");

playing.style.paddingBottom = "20%";

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let isPlaying = json.track['@attr']?.nowplaying || false;

    if(!isPlaying) {
        // HIDE PLAYER DIV
    } else {
        // SHOW PLAYER DIV
    }

    // SET IMAGE/TEXT HERE
    // COVER IMAGE: json.track.image[1]['#text']

    // TITLE: json.track.name
    // ARTIST: json.track.artist['#text']

    let items = `
    <img src="${json.track.image[1]['#text']}">
    <br>
    <span style="color: #a6e3a1">${json.track.name}</span>
    <br>
    <span>By</span>
    <br>
    <span style="color: #a6e3a1">${json.track.artist['#text']}</span>
    `

    playing.style.paddingBottom = "0px";
    playing.innerHTML = items;

};
setInterval(() => { getTrack(); }, 5000);
getTrack();