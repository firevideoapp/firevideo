const api_url = "https://firevideo.vercel.app/DB/MOVIES.json";
async function getFilesAndFolders() {
    const response = await fetch(api_url);
    var data = await response.json();
    let list = document.getElementById("movie_list");
    // var jsonData = await JSON.parse(data);
    for(let i = 0; i < 25; i++) {
        var movie = data[i];
        let li = document.createElement('li');

        let movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        let url = './movie-details.html?id=' + movie.id;
        
        let clickable = document.createElement('a');
        clickable.href = url;

        let figure = document.createElement('figure');
        figure.className = 'card-banner';

        let image = document.createElement('img');
        image.src = movie.banner;
        image.alt = movie.name;

        figure.appendChild(image);

        clickable.appendChild(figure);

        let titleWrapper = document.createElement('div');
        titleWrapper.className = 'title-wrapper';

        let clickableTitle = document.createElement('a');
        clickableTitle.href = url;

        let h3 = document.createElement('h3');
        h3.className = 'card-title';
        h3.textContent = movie.name;

        let p = document.createElement('p');
        p.className = 'normal-text-thin';
        // p.style.color = '#ffffff';
        p.innerHTML = movie.language;
        
        clickableTitle.appendChild(h3);

        titleWrapper.appendChild(clickableTitle);

        movieCard.appendChild(clickable);

        movieCard.appendChild(titleWrapper);
        movieCard.appendChild(p);

        li.appendChild(movieCard);

        list.appendChild(li);

        // let name = movie.name;
        // let link = document.createElement('a');
        // link.href = "";
        // link.onclick = "onClick(movie.fld_id)"; //"https://api.streamsb.co/api/folder/list?key=9027dcim62hq4asqpoa6&fld_id=" + movie.fld_id;
        // link.innerText = name;
        // link.style.color = "#ffffff";
        // list.appendChild(link);
    }
}

function onClick(fld_id) {
    
}

if (window.addEventListener) {
    window.addEventListener("load", getFilesAndFolders, false);
}