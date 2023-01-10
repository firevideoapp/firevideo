const movies_api_url = "https://firevideo.vercel.app/DB/MOVIES.json";
const channels_api_url = "https://firevideo.vercel.app/DB/CHANNELS.json";
const shows_api_url = "https://firevideo.vercel.app/DB/SHOWS.json";

async function searchMovies() {
    const response = await fetch(movies_api_url);
    var data = response.json();
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].id);
    }   
}