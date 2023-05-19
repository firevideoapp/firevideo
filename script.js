document.addEventListener('DOMContentLoaded', function() {
    // Fetch movie data and generate movie items
    fetch('https://firevideo.vercel.app/DB/MOVIES.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var movieList = document.querySelector('.movie-list');
        data.forEach(function(movie) {
          var movieItem = document.createElement('div');
          movieItem.classList.add('movie-item');
          movieItem.innerHTML = '<img src="' + movie.banner + '" width="200" height="300" alt="' + movie.name + '"><h3>' + movie.name + '</h3>';
          movieList.appendChild(movieItem);
        });
      })
      .catch(function(error) {
        console.log('Error fetching movies:', error);
      });
  
    // Fetch web series data and generate web series items
    fetch('api/webseries')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var webSeriesList = document.querySelector('.web-series-list');
        data.forEach(function(webSeries) {
          var webSeriesItem = document.createElement('div');
          webSeriesItem.classList.add('web-series-item');
          webSeriesItem.innerHTML = '<img src="' + webSeries.poster + '" alt="' + webSeries.title + '"><h3>' + webSeries.title + '</h3>';
          webSeriesList.appendChild(webSeriesItem);
        });
      })
      .catch(function(error) {
        console.log('Error fetching web series:', error);
      });
  });