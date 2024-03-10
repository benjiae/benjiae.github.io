const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/benjae_/latest-song`;
const playing = document.getElementById("listening");

const getTrack = async () => {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let isPlaying = json.track['@attr']?.nowplaying || false;

    let items = `
    <img src="${json.track.image[1]['#text']}">
    <br>
    <span style="color: #a6e3a1">${json.track.name}</span>
    <br>
    <span>By</span>
    <br>
    <span style="color: #a6e3a1">${json.track.artist['#text']}</span>
    `

    if(!isPlaying) {
        playing.innerHTML = "Nothing.<br>(or last.fm just sucks)";
    } else {
        playing.innerHTML = items;
    }
    

};
setInterval(() => { getTrack(); }, 5000);
getTrack();