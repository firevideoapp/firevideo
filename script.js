document.addEventListener('DOMContentLoaded', function() {
    // Fetch movie data and generate movie items
    fetch('https://firevideo.vercel.app/DB/MOVIES.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var movieList = document.querySelector('.movie-list');
        for (i = 0; i < 10; i++) {
            var movie = data[i];
            var movieItem = document.createElement('div');
            var movieUrl = movie.stream;
            movieItem.id = movie.stream;
            movieItem.classList.add('movie-item');
            movieItem.innerHTML = '<img src="' + movie.banner + '" width="200" height="300" alt="' + movie.name + '"><h3 style="width: 200px;">' + movie.name + '</h3><p>' + movie.language + '</p>';
            movieList.appendChild(movieItem);

            movieItem.addEventListener("click", function() {
                window.location.href = movieItem.id;
            });
        }
        // data.forEach(function(movie) {
        //   
        // });
      })
      .catch(function(error) {
        console.log('Error fetching movies:', error);
      });
  
    // Fetch web series data and generate web series items
    fetch('https://firevideo.vercel.app/DB/SHOWS.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var webSeriesList = document.querySelector('.web-series-list');
        for (i = 0; i < 10; i++) {
            var webSeries = data[i];
            var webSeriesItem = document.createElement('div');
            webSeriesItem.id = "series_item";
            webSeriesItem.classList.add('web-series-item');
            webSeriesItem.innerHTML = '<img src="' + webSeries.showImage + '" width="200" height="300" alt="' + webSeries.showName + '"><h3 style="width: 200px;">' + webSeries.showName + '</h3><p>' + webSeries.showLang + '</p>';
            webSeriesList.appendChild(webSeriesItem);
        }
        // data.forEach(function(webSeries) {
          
        // });
      })
      .catch(function(error) {
        console.log('Error fetching web series:', error);
      });
  });