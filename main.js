/* Jag har valt module pattern som mönster. Dels för att det håller koden ganska ren iom man slipper
this och prototype som annars kan fylla upp koden och göra den förvirrande. 
Det som kan vara svårt med module pattern är att hantera de returns som de inre funktionsobjekten levererar. 
Via namespacet (EvelinaMovieDatabase) kan vi komma åt de anonyma funktionerna inuti modulen. */

var EvelinaMovieDatabase = (function() {

    // Array with pre set movies

    var movielist = [{
        title: 'The lobster',
        year: 2015,
        genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
        ratings: [5, 4, 5, 5],
        average: 0

    }, {
        title: 'Pulp Fiction',
        year: 1994,
        genres: ['Crime', 'Drama'],
        ratings: [5, 5, 5, 5],
        averege: 0

    }, {
        title: 'Forrest Gump',
        year: 1994,
        genres: ['Comedy', 'Drama', 'Romance'],
        ratings: [5, 4, 5, 4],
        average: 0
    }, {
        title: 'The Grand Budapest Hotel',
        year: 2014,
        genres: ['Comedy', 'Drama', 'Adventure'],
        ratings: [3, 4, 5, 5],
        average: 0
    }, {
        title: 'The Imitation Game',
        year: 2014,
        genres: ['Thriller', 'Drama'],
        ratings: [5, 4, 5, 2],
        average: 0
    }, {
        title: 'Amelie from Montmartre',
        year: 2001,
        genres: ['Comedy', 'Romance'],
        ratings: [5, 5, 3, 5],
        average: 0
    }, {
        title: 'The shawshank redemption',
        year: 1994,
        genres: ['Crime', 'Drama'],
        ratings: [5, 5, 5, 5],
        average: 0
    }, {
        title: 'The Dark Knight',
        year: 2008,
        genres: ['Action', 'Drama', 'Crime'],
        ratings: [5, 5, 4, 5],
        average: 0
    }, {
        title: 'Finding Nemo',
        year: 2003,
        genres: ['Comedy', 'Adventure', 'Animation'],
        ratings: [3, 4, 5, 5],
        averege: 0
    }, {
        title: 'Kill Bill: Vol. 1',
        year: 2003,
        genres: ['Action', 'Crime', 'Thriller'],
        ratings: [5, 4, 5, 3],
        average: 0
    }];

    // Return 

    return {

        //Functions that returns all movies 

        getAllMovies: function() {
            return movielist;
        },

        //Function that pushes movie into movielist

        pushMovie: function(movie) {
            movielist.push(movie);
        },

        //Constructor 

        movieConstructor: function(title, year, genres, ratings) {
            this.title = title;
            this.year = year;
            this.genres = genres.split(); //to split value into array
            this.ratings = ratings.split(); //to split alue into array 
        },

        // Create new movie via constructor 
        // Get element IDs from DOM 

        createMovie: function(e) {
            e.preventDefault(); //prevent site from reloading
            let getInputTitle = document.getElementById("inputTitle");
            let getInputYear = document.getElementById("inputYear");
            let getInputGenres = document.getElementById("inputGenres");
            let getInputRating = document.getElementById("inputRating");


            let newMovie = new EvelinaMovieDatabase.movieConstructor(getInputTitle.value, getInputYear.value, getInputGenres.value, getInputRating.value);


            // Pushing new movie to database via pushMovie function 

            EvelinaMovieDatabase.pushMovie(newMovie);

        },

        //Function that prints out all movie objects via html chunk 

        showMovies: function() {
            listOfMovies.innerHTML = "";
            var html = "";
            for (var i = 0; i < movielist.length; i++) {
                html += `<div class = "movie-card">
		<p><b>Movie Title : ${movielist[i].title} </b></p>
		<p>Release Year : ${movielist[i].year}</p>
		<p>Genres : ${movielist[i].genres}</p>
		<p>Ratings : ${movielist[i].ratings}</p>
		<p>Add Genres:</p>
		<input type="text" id="inputExtraGenres" value="">
		<button id="btnExtraGenres">Add Genres</button>
		<p>Remove Genres:</p> 
		<input type="text" id="inputRemoveGenres" value="">
		<button id="btnRemoveGenres">Remove Genres</button>
		<p>Add Rating:</p> 
		<input type="text" id="inputExtraRating" value="">
		<button id="btnAddRatings">Add Ratings</button>
		</br>
		</br>
		</div>`;

            }
            listOfMovies.innerHTML = html;
        },

        // function that shows movies via parameter of users chosen genre & creates html chunk 

        showGenre: function(genreList) {
            var html = "";
            listOfMovies.innerHTML = "";
            for (var i = 0; i < genreList.length; i++) {
                html += `<div class = "movie-card">
		<p><b>Movie Title : ${genreList[i].title}</b></p>
		<p>Release Year : ${genreList[i].year}</p>
		<p>Genres : ${genreList[i].genres}</p>
		<p>Ratings : ${genreList[i].ratings}</p>
		<p>Add Genres:</p>
		<input type="text" id="inputExtraGenres" value="">
		<button id="btnExtraGenres">Add Genres</button>
		<p>Remove Genres:</p> 
		<input type="text" id="inputRemoveGenres" value="">
		<button id="btnRemoveGenres">Remove Genres</button>
		<p>Add Rating:</p> 
		<input type="text" id="inputExtraRating" value="">
		<button id="btnAddRatings">Add Ratings</button>
		</br>
		</br>
		</div>`;
            }
            listOfMovies.innerHTML = html;
        },

        // function that collects user genre input 

        inputGenre: function(choice) {
            var userChoice = EvelinaMovieDatabase.filterGenre(choice.target.value);
            EvelinaMovieDatabase.showGenre(userChoice);
        },

        // function that checks users chosen genre with array genres 

        filterGenre: function(genre) {
            return movielist.filter((movie) =>
                    movie.genres.some((genres) => genres == genre))
                .map(movie => {
                    return movie;
                }, 0);
        },

        // function that takes users choice of year as parameter & creates html chunk 

        showYears: function(userYear) {
            listOfMovies.innerHTML = "";
            var html = "";
            for (var i = 0; i < userYear.length; i++) {
                html += `<div class = "movie-card">
		<p><b>Movie Title : ${userYear[i].title}</b></p>
		<p>Release Year : ${userYear[i].year}</p>
		<p>Genres : ${userYear[i].genres}</p>
		<p>Ratings : ${userYear[i].ratings}</p>
		<p>Add Genres:</p>
		<input type="text" id="inputExtraGenres" value="">
		<button id="btnExtraGenres">Add Genres</button>
		<p>Remove Genres:</p> 
		<input type="text" id="inputRemoveGenres" value="">
		<button id="btnRemoveGenres">Remove Genres</button>
		<p>Add Rating:</p> 
		<input type="text" id="inputExtraRating" value="">
		<button id="btnAddRatings">Add Ratings</button>
		</br>
		</br>
		</div>`;

            }
            listOfMovies.innerHTML = html;
        },



        //function that collects user year input

        inputYear: function(choice) {
            var userYear = EvelinaMovieDatabase.findYear(choice.target.value);
            EvelinaMovieDatabase.showYears(userYear);
        },

        //function that checks users chosen year with array year

        findYear: function(year) {
            return movielist.filter((movie) => {
                return movie.year == year;

            });
        },


        //functions that does not work correct yet 

        //Calculate avarage rating

        // getAverageRating : function () {
        // 	for (var i = 0; i < movielist.length; i++) {
        // 		var average = 0;
        // 		for (var j = 0; j < movielist.ratings.length; j++) {
        // 			average = average + movielist[i].ratings[j]; //det man säger här är att average är varje objekts olika ratings 
        // 		}
        // 		movielist[i].average = average/movielist[i].ratings.length;
        // 		//varje movielist average value = varje objekts olika ratings / varje objekts ratingslängd

        // 	}

        // },

        // getTopRatedMovie : function () {
        // 	var goodMovie = {};
        // 	var max = movielist[0].average;
        // 	for (var i = 0; i < movielist.length; i++) {
        // 		if (movielist[i].average > max){
        // 			goodMovie = movielist[i];
        // 		}
        // 	}
        // 	return goodMovie;
        // 	},


        // //Get worst rated movie

        // getWorstRatedMovie : function () {
        // 	var badMovie = {};
        // 	var min = movielist[0].average;
        // 	for (var i = 0; i < movielist.length; i++){
        // 		if (movielist[i].average > min){
        // 			badMovie = movielist[i];
        // 		}
        // 	}
        // 	return badMovie;
        // },



    };
})();

// Apply to interface 

// SHOW ALL MOVIES 

document.getElementById("btnMovies").addEventListener("click", EvelinaMovieDatabase.showMovies);

// SUBMIT MOVIE TO DATABASE 

document.getElementById("submitMovie").addEventListener("click", EvelinaMovieDatabase.createMovie);

// SORT MOVIES BY GENRE 

document.getElementById("sortgenre").addEventListener("change", EvelinaMovieDatabase.inputGenre);

// SORT MOVIES BY YEAR  

document.getElementById("sortyear").addEventListener("change", EvelinaMovieDatabase.inputYear);

// GET TOP RATED MOVIE NOT DONE

// GET WORST RATED MOVIE NOT DONE
