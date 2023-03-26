const api_url = "https://firevideo.vercel.app/DB/MOVIES.json";
const providers_api_url = "https://firevideo.vercel.app/DB/providers.json";
const hypershorts_api_url = "https://hypershort.com/api?api=29b3ea95cb95add2b6696337d055174877afee13&url=";

let movieImage = document.getElementById('movie_image');
let genreLabel = document.getElementById('movie_genre');
let storyText = document.getElementById('storyline');
let studioText = document.getElementById('studio_title');
let watchButton = document.getElementById('watch_btn');

var playerShowing = false;

var providerName, streamUrl;

async function getMovieData(id) {
    const response = await fetch(api_url);
    var data = await response.json();
    data.forEach((item) => {
        let movie = item;
        if (movie.id === id) {
            document.getElementById('movie_image').src = movie.banner;
            document.getElementById('movie_title').textContent = movie.name;
            document.title = movie.name;
            // document.getElementById('movie_thumb').style.background = "linear-gradient(to left, transparent 10%, black 60%),url(" + movie.thumbnail + ") no-repeat";
            // document.getElementById('movie_thumb').style.backgroundSize = 'cover';
            genreLabel.innerHTML = movie.genre;
            storyText.innerHTML = movie.description;
            getProviderNameById(movie.provider.split(',')[0]);
            streamUrl = movie.stream;

            if (!streamUrl.includes('/e/')) {
                var lastOccurrence = streamUrl.lastIndexOf("/");
                streamUrl = streamUrl.substring(0, lastOccurrence + 1) + "e" + streamUrl.substring(lastOccurrence);
            }

            watchButton.style.display = 'block';
        }
    });
}

function watchButtonClick() {
    let iframe = document.createElement('iframe');
    iframe.id = 'embed_player';
    iframe.src = streamUrl;
    iframe.allowFullscreen = true;
    iframe.frameBorder = 0;
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.bottom = 0;
    iframe.style.right = 0;
    iframe.style.left = 0;
    iframe.width = "100%";
    iframe.height = "100%";
    document.body.appendChild(iframe);
    document.getElementById('header').style.display = "none";
    playerShowing = true;
    // document.location.href = streamUrl;
}

async function getDownloadUrl(url) {
    const response = await fetch(hypershorts_api_url + streamUrl.replace('/e/', '/d/'));
    var data = await response.json();
    var shortenedUrl = data.shortenedUrl;
    document.location.href = shortenedUrl;
}

async function getProviderNameById(id) {
    const response = await fetch(providers_api_url);
    var data = await response.json();
    // let providerName;
    data.forEach((item) => {
        let provider = item;
        if (provider.id == id) {
            studioText.innerHTML = provider.name;
        } else {
            studioText.innerHTML = "FireVideo";
        }
    });
}

let params = (new URL(document.location)).searchParams;
let id = params.get('id');
window.addEventListener("load", getMovieData(id), false);