/* Jag har valt module pattern som mönster. Dels för att det håller koden ganska ren iom man slipper
this och prototype som annars kan fylla upp koden och göra den förvirrande. 
Det som kan vara svårt med module pattern är att hantera de returns som de inre funktionsobjekten levererar. 
Via namespacet (EvelinaMovieDatabase) kan vi komma åt de anonyma funktionerna inuti modulen. */

var EvelinaMovieDatabase = (function() {

    // Array with pre set movies

    let movielist = [{
        title: 'The Lobster',
        year: 2015,
        genres: ['Comedy', 'Drama', 'Romance', 'Sci-Fi'],
        ratings: [5, 4, 5, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDQ1NDE5NzQ1NF5BMl5BanBnXkFtZTgwNzA5OTM2NTE@._V1_SY1000_CR0,0,705,1000_AL_.jpg',
        average: 0

    }, {
        title: 'Her',
        year: 2013,
        genres: ['Romance', 'Drama', 'Sci-Fi'],
        ratings: [3, 3, 4, 3],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_.jpg',
        average: 0

    }, {
        title: 'Pulp Fiction',
        year: 1994,
        genres: ['Crime', 'Drama'],
        ratings: [5, 5, 5, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
        average: 0

    }, {
        title: 'The Dancer',
        year: 2016,
        genres: ['Drama', 'Romance'],
        ratings: [2, 2, 4, 3],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTY3MjQyMzAtODkzNS00YzI1LWE5ZDktZTJkMGVlZWZmZTAzXkEyXkFqcGdeQXVyNDcyMjQ4MzU@._V1_SX750_CR0,0,750,999_AL_.jpg',
        average: 0
    }, {
        title: 'Heartbeats',
        year: 2010,
        genres: ['Drama', 'Romance'],
        ratings: [5, 2, 5, 3],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU0MDA2NjEwNV5BMl5BanBnXkFtZTcwNTkyMzgzNA@@._V1_SY1000_CR0,0,689,1000_AL_.jpg',
        average: 0
    }, {
        title: 'Forrest Gump',
        year: 1994,
        genres: ['Comedy', 'Drama', 'Romance'],
        ratings: [5, 4, 5, 4],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,757,1000_AL_.jpg',
        average: 0
    }, {
        title: 'The Grand Budapest Hotel',
        year: 2014,
        genres: ['Comedy', 'Drama', 'Adventure'],
        ratings: [3, 4, 5, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SY1000_SX675_AL_.jpg',
        average: 0
    }, {
        title: 'The Imitation Game',
        year: 2014,
        genres: ['Thriller', 'Drama'],
        ratings: [5, 4, 5, 2],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjI3NjY1Mjg3MV5BMl5BanBnXkFtZTgwMzk5MDQ3MjE@._V1_SY1000_CR0,0,680,1000_AL_.jpg',
        average: 0
    }, {
        title: 'Amelie From Montmartre',
        year: 2001,
        genres: ['Comedy', 'Romance'],
        ratings: [5, 5, 3, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTA3MjVkMWMtYTQ4ZC00ODczLWFjYmQtMDFkZDQ2Y2M0NDVmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
        average: 0
    }, {
        title: 'The Shawshank Redemption',
        year: 1994,
        genres: ['Crime', 'Drama'],
        ratings: [5, 5, 5, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg',
        average: 0
    }, {
        title: 'The Dark Knight',
        year: 2008,
        genres: ['Action', 'Drama', 'Crime'],
        ratings: [5, 5, 4, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg',
        average: 0
    }, {
        title: 'Finding Nemo',
        year: 2003,
        genres: ['Comedy', 'Adventure', 'Animation'],
        ratings: [3, 4, 5, 5],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg',
        average: 0
    }, {
        title: 'Kill Bill: Vol. 1',
        year: 2003,
        genres: ['Action', 'Crime', 'Thriller'],
        ratings: [5, 4, 5, 3],
        img: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1NDg1Mzg4M15BMl5BanBnXkFtZTYwMDExOTc3._V1_.jpg',
        average: 0
    }];

    // Return 

    return {

        //Functions that returns all movies 

        // getAllMovies: function() {
        //     return movielist;
        // },

        //Function that pushes movie into movielist

        pushMovieToDatabase: function(movie) {
            movielist.push(movie);
        },

        //Constructor 
        movieConstructor: function(title, year, genres, ratings, img) {
            this.title = title;
            this.year = year;
            this.genres = [genres]
            this.ratings = ratings
            this.img = img;
        },

        // Create new movie via constructor 
        // Get element IDs from DOM 

        // createMovie: function(e) {
        //     e.preventDefault(); //prevent site from reloading
        //     let getInputTitle = document.getElementById("inputTitle");
        //     let getInputYear = document.getElementById("inputYear");
        //     let getInputGenres = document.getElementById("inputGenres");
        //     let getInputRating = document.getElementById("inputRating");
        //     let getInputImg = document.getElementById("inputImg");


        //     let newMovie = new EvelinaMovieDatabase.movieConstructor(getInputTitle.value, getInputYear.value, getInputGenres.value, getInputRating.value, getInputImg.value);


        //     // Pushing new movie to database via pushMovie function 

        //     EvelinaMovieDatabase.pushMovieToDatabase(newMovie);

        // },


            createMovie: function(e) {
            e.preventDefault(); //prevent site from reloading
            let getInputTitle = document.getElementById("inputTitle");
            let getInputYear = document.getElementById("inputYear");
            let getInputGenres = document.getElementById("inputGenres");
            let genreOption = getInputGenres.options[getInputGenres.selectedIndex].value;
            let getInputRating = document.getElementById("inputRating");
            let getInputImg = document.getElementById("inputImg");




            let newMovie = new EvelinaMovieDatabase.movieConstructor(getInputTitle.value, getInputYear.value, genreOption, getInputRating.value, getInputImg.value);


            // Pushing new movie to database via pushMovie function 

            EvelinaMovieDatabase.pushMovieToDatabase(newMovie);

        },

        //Function that prints out all movie objects via html chunk 

        showMovies: function() {
            listOfMovies.innerHTML = "";
            let html = "";
            for (var i = 0; i < movielist.length; i++) {
                html += `   <div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <img src="${movielist[i].img}" class ="moviecover">
        <p><b>Movie Title :</b> ${movielist[i].title} </p>
        <p><b>Release Year :</b>  ${movielist[i].year}</p>
        <p><b>Genres : </b>${movielist[i].genres}</p>
        <p><b>Ratings :</b> ${movielist[i].ratings}</p>
        </div>
        </div>`;

            }
            listOfMovies.innerHTML = html;
        },

        // function that shows movies via parameter of users chosen genre & creates html chunk 

        showGenre: function(genreList) {
            let html = "";
            listOfMovies.innerHTML = "";
            for (var i = 0; i < genreList.length; i++) {
                html += `   <div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <img src="${genreList[i].img}" class ="moviecover">
        <p><b>Movie Title : ${genreList[i].title} </b></p>
        <p>Release Year : ${genreList[i].year}</p>
        <p>Genres : ${genreList[i].genres}</p>
        <p>Ratings : ${genreList[i].ratings}</p>
        </div>
        </div>`;
            }
            listOfMovies.innerHTML = html;
        },

        // function that collects user genre input 

        inputGenre: function(choice) {
            let userChoice = EvelinaMovieDatabase.filterGenre(choice.target.value);
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
            let html = "";
            for (var i = 0; i < userYear.length; i++) {
                html += `   <div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <img src="${userYear[i].img}" class ="moviecover">
        <p><b>Movie Title : ${userYear[i].title} </b></p>
        <p>Release Year : ${userYear[i].year}</p>
        <p>Genres : ${userYear[i].genres}</p>
        <p>Ratings : ${userYear[i].ratings}</p>
        </div>
        </div>`;

            }
            listOfMovies.innerHTML = html;
        },


        //function that collects user year input

        inputYear: function(choice) {
            let userYear = EvelinaMovieDatabase.findYear(choice.target.value);
            EvelinaMovieDatabase.showYears(userYear); //skickar med userUear i showyears som parameter
        },

        //function that checks users chosen year with array year filtrerar movielist year 

        findYear: function(userYear) {
            return movielist.filter((movie) => {
                return movie.year == userYear;

            });
        },

        // get worst rated movie 

        getAverageRating: function() {

            //Looping through the whole movies-array to reach every movie's ratings-property that in turn is an array
            for (let i = 0; i < movielist.length; i++) {

                /* Counting the sum for every movie's ratings-array with reduce. totalValue is set to 0
                as startvalue and value sum up all the values for every movie's ratings-array. So for every
                loop, this is summed up for each movie. */
                movielist[i].ratings.reduce(function(totalValue, value) {

                    //For every loop the new value is collected in the movies-array's average-property
                    movielist[i].average += value;

                }, 0);

                /* I get the actual average-rate for every movie by dividing every movie's ratings-arrays summed up value with 
                the length of every movie's ratings-array for every loop. The average return a number with one decimal */
                movielist[i].average = (movielist[i].average / movielist[i].ratings.length).toFixed(1);

            }

            //Return all the movies after the loop
            return movielist;

            console.log(movielist);

        },

        // get worst rated movie 

        getWorstRatedMovie: () => {
            let worstRated;

            let min = movielist[0].average;
            for (let i = 0; i < movielist.length; i++) {
                if (movielist[i].average < min) {

                    min = movielist[i].average;


                    worstRated = movielist[i];

                }
            }

            return worstRated;

            console.log(worstRated);

        },


        printOutWorstMovie: function() {
            document.getElementById("btnBadMovie").addEventListener("click", function() {

                var badMovie = EvelinaMovieDatabase.getWorstRatedMovie();
                listOfMovies.innerHTML = '';

                var movieHtml = `<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <img src="${badMovie.img}" class ="moviecover">
        <p><b>Movie Title : ${badMovie.title} </b></p>
        <p>Release Year : ${badMovie.year}</p>
        <p>Genres : ${badMovie.genres}</p>
        <p>Ratings : ${badMovie.ratings}</p>
        </div>
        </div>`;
                listOfMovies.innerHTML = movieHtml;
            })
        },


        //get top rated movie


        getTopRatedMovie: () => {
            let bestRated;

            let max = movielist[0].average;
            for (let i = 0; i < movielist.length; i++) {
                if (movielist[i].average > max) {

                    max = movielist[i].average;


                    bestRated = movielist[i];

                }
            }

            return bestRated;

        },


        printOutBestMovie: function() {
            document.getElementById("btnGoodMovie").addEventListener("click", function() {

                var goodMovie = EvelinaMovieDatabase.getTopRatedMovie();
                listOfMovies.innerHTML = '';

                var movieHtml = `<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
        <img src="${goodMovie.img}" class ="moviecover">
        <p><b>Movie Title : ${goodMovie.title} </b></p>
        <p>Release Year : ${goodMovie.year}</p>
        <p>Genres : ${goodMovie.genres}</p>
        <p>Ratings : ${goodMovie.ratings}</p>
        </div>
        </div>`;
                listOfMovies.innerHTML = movieHtml;
            })
        },



        removeGenre: function(title, genre) {
            let removeItem = [];
            // var finalRemovedItem = [];

            //hitta rätt titel 
            for (let i = 0; i < movielist.length; i++) {
                //om property titeln stämmer överens med titeln som användaren skrivit in 
                if (movielist[i].title == title) {
                    //filmen finns i arrayen 
                    removeItem = movielist[i];
                }
            }
            //nu har vi rätt film kolla efter genre 
            for (let i = 0; i < removeItem.genres.length; i++) {
                //index av genres 
                if (removeItem.genres[i] == genre) { //om genre i arrayen stämmer överens med genre parameter
                    removeItem.genres.splice(i, 1); //för det indexet som stämmer överens med genren tar man bort den strängen med rätt genre
                    return removeItem; //returnerar borttaget item 

                }
            }

        },


        //add genre

        addGenre: function(title, genre) {
            var addItem = [];
            for (let i = 0; i < movielist.length; i++) {
                if (movielist[i].title == title) {
                    addItem = movielist[i];
                }
            }
            for (let i = 0; i < addItem.genres.length; i++) {
                addItem.genres.push(genre);
                return addItem;

            }
        },


        //add rating 

        addRating: function(title, rating) {
            let addRating = [];
            for (let i = 0; i < movielist.length; i++) {
                if (movielist[i].title == title) {
                    addRating = movielist[i];
                }
            }
            for (let i = 0; i < addRating.ratings.length; i++) {
                // if(addRating.ratings[i] !== rating){
                addRating.ratings.push(rating);
                return addRating;
                // }
            }
        },


        init: () => {

            document.getElementById("btnMovies").addEventListener("click", EvelinaMovieDatabase.showMovies);

            document.getElementById("submitMovie").addEventListener("click", EvelinaMovieDatabase.createMovie);

            document.getElementById("sortgenre").addEventListener("change", EvelinaMovieDatabase.inputGenre);

            document.getElementById("sortyear").addEventListener("change", EvelinaMovieDatabase.inputYear);

            EvelinaMovieDatabase.printOutWorstMovie();

            console.log(EvelinaMovieDatabase.removeGenre("Pulp Fiction", "Crime"));

            console.log(EvelinaMovieDatabase.addGenre("The Lobster", "Hej"));

            console.log(EvelinaMovieDatabase.getAverageRating());

            console.log(EvelinaMovieDatabase.getWorstRatedMovie());

            EvelinaMovieDatabase.printOutBestMovie();

        }

    };
})();

EvelinaMovieDatabase.init();
