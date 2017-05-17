/* Jag har valt module pattern som mönster. Dels för att det håller koden ganska ren iom man slipper
this och prototype som annars kan fylla upp koden och göra den förvirrande. 
Det som kan vara svårt med module pattern är att hantera de returns som de inre funktionsobjekten levererar. 
Via namespacet (EvelinaMovieDatabase) kan vi komma åt de anonyma funktionerna inuti modulen. */

//since the content in the database is going to change, for example average the module needs to be assigned as let and not const

let EvelinaMovieDatabase = (function() {

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

        //pushes movie into Database

        pushMovieToDatabase: (movie) => {
            movielist.push(movie);
        },

        //Constructor can't be an arrow function therefor regular function 
        movieConstructor: function(title, year, genres, ratings, img) {
            this.title = title;
            this.year = year;
            this.genres = [genres];
            this.ratings = ratings;
            this.img = img;
        },

        //function that creates new movies 

        createMovie: (e) => {
            e.preventDefault(); //prevent site from reloading
            let getInputTitle = document.getElementById("inputTitle");
            let getInputYear = document.getElementById("inputYear");
            let getInputImg = document.getElementById("inputImg");

            //since genre and rating is a select in DOM you need to get selected index and not just value as the rest 
            let getInputGenres = document.getElementById("inputGenres");
            let genreOption = getInputGenres.options[getInputGenres.selectedIndex].value;
            let getInputRating = document.getElementById("inputRating");
            let ratingOption = getInputRating.options[getInputRating.selectedIndex].value;



            let newMovie = new EvelinaMovieDatabase.movieConstructor(getInputTitle.value, getInputYear.value, genreOption, getInputRating.value, getInputImg.value);


            // Pushing new movie to database via pushMovie function 

            EvelinaMovieDatabase.pushMovieToDatabase(newMovie);

        },

        //Function that prints out all movie objects to DOM 

        printOutMovies: () => {
            listOfMovies.innerHTML = "";
            let html = "";
            for (let i = 0; i < movielist.length; i++) {
                html += `
<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <img src="${movielist[i].img}" class="moviecover">
    <p><b>Movie Title :</b> ${movielist[i].title} </p>
    <p><b>Release Year :</b> ${movielist[i].year}</p>
    <p><b>Genres : </b>${movielist[i].genres}</p>
    <p><b>Ratings :</b> ${movielist[i].ratings}</p>
    <p><b>Add Rating :</b></p>
</div>`;

            }
            listOfMovies.innerHTML = html;
        },


        // function that collects user genre input and filters them via filterGenre function and sends the movies with the chosen genre to printMoviesSortedByGenre to show in DOM

        inputGenre: (choice) => {
            let userChoice = EvelinaMovieDatabase.filterGenre(choice.target.value);
            EvelinaMovieDatabase.printMoviesSortedByGenre(userChoice);
        },

        //filters movie with the genre that the user sends in as parameter

        filterGenre: (genre) => {
            //filter movies in movielist
            return movielist.filter((movie) =>
                //if the movies in movielist = genre that user chooses we loop through the movies that match and returns them
                    movie.genres.some((genres) => genres == genre))
                .map(movie => {
                    return movie;
                }, 0);
        },

        // function that shows movies via parameter of users chosen genre & puts in DOM  

        printMoviesSortedByGenre: (genreList) => {
            let html = "";
            listOfMovies.innerHTML = "";
            for (let i = 0; i < genreList.length; i++) {
                html += `   
<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <img src="${genreList[i].img}" class ="moviecover">
    <p><b>Movie Title : ${genreList[i].title} </b></p>
    <p>Release Year : ${genreList[i].year}</p>
    <p>Genres : ${genreList[i].genres}</p>
    <p>Ratings : ${genreList[i].ratings}</p>
</div>`;
            }
            listOfMovies.innerHTML = html;
        },


        //function that collects user year input

        inputYear: (choice) => {
            let userYear = EvelinaMovieDatabase.findYear(choice.target.value);
            EvelinaMovieDatabase.printMoviesSortedByYear(userYear); //skickar med userUear i printMoviesSortedByYear som parameter
        },

        //function that checks users chosen year with array year filtrerar movielist year 

        findYear: (userYear) => {
            return movielist.filter((movie) => {
                return movie.year == userYear;

            });
        },

        // function that takes users choice of year as parameter & puts in DOM  

        printMoviesSortedByYear: (userYear) => {
            listOfMovies.innerHTML = "";
            let html = "";
            for (let i = 0; i < userYear.length; i++) {
                html += `   
<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <img src="${userYear[i].img}" class ="moviecover">
    <p><b>Movie Title : ${userYear[i].title} </b></p>
    <p>Release Year : ${userYear[i].year}</p>
    <p>Genres : ${userYear[i].genres}</p>
    <p>Ratings : ${userYear[i].ratings}</p>
</div>`;

            }
            listOfMovies.innerHTML = html;
        },


        // function that counts each movie ojbects average rating

        getAverageRating: () => {

            for (let i = 0; i < movielist.length; i++) {

                //each element in the ratings array is reduced to one value checks total and adds current value to total 
                movielist[i].ratings.reduce(function(tot, value) {

                    movielist[i].average += value;

                }, 0);

                // divides average that is now the total ratings value with the length of ratings to get average rating 
                movielist[i].average = (movielist[i].average / movielist[i].ratings.length).toFixed(1);

            }

            return movielist;

        },

        // function that finds worst rated movie 

        getWorstRatedMovie: () => {
            let worstRated;

            //first average in movielist as startvalue
            let min = movielist[0].average;
            for (let i = 0; i < movielist.length; i++) {
                //if the current iteration value in the loop is smaller than the checked value min = current average 
                if (movielist[i].average < min) {

                    min = movielist[i].average;


                    worstRated = movielist[i];

                }
            }

            return worstRated;

        },

        //function that shows worst rated movie 


        printOutWorstMovie: () => {

            document.getElementById("btnBadMovie").addEventListener("click", function() {

                let badMovie = EvelinaMovieDatabase.getWorstRatedMovie();
                listOfMovies.innerHTML = '';

                let movieHtml = `
<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <img src="${badMovie.img}" class ="moviecover">
    <p><b>Movie Title : ${badMovie.title} </b></p>
    <p>Release Year : ${badMovie.year}</p>
    <p>Genres : ${badMovie.genres}</p>
    <p>Ratings : ${badMovie.ratings}</p>
</div>`;
                listOfMovies.innerHTML = movieHtml;
            })
        },


        //functions that gets top rated movie from movielist

        getTopRatedMovie: () => {
            let bestRated;

            //first average in movielist as startvalue
            let max = movielist[0].average;
            for (let i = 0; i < movielist.length; i++) {
                //if the current iteration value in the loop is bigger than the checked value max = current average 
                if (movielist[i].average > max) {
                    max = movielist[i].average;
                    bestRated = movielist[i];
                }
            }

            return bestRated;

        },

        //function that shows best rated movie 


        printOutBestMovie: () =>  {
            document.getElementById("btnGoodMovie").addEventListener("click", function() {

                let goodMovie = EvelinaMovieDatabase.getTopRatedMovie();
                listOfMovies.innerHTML = '';

                let movieHtml = `
<div class = "col-xs-12 col-sm-6 col-md-6 col-lg-3">
    <img src="${goodMovie.img}" class ="moviecover">
    <p><b>Movie Title : ${goodMovie.title} </b></p>
    <p>Release Year : ${goodMovie.year}</p>
    <p>Genres : ${goodMovie.genres}</p>
    <p>Ratings : ${goodMovie.ratings}</p>
</div>`;
                listOfMovies.innerHTML = movieHtml;
            })
        },

// function that removes genre from selected movie

        removeGenre: (title, genre) => {
            let removeItem = [];

            //find right title 
            for (let i = 0; i < movielist.length; i++) {
                //if property titel = title parameter
                if (movielist[i].title == title) {

                    removeItem = movielist[i];
                }
            }
            // now that we got the right title - check genre 
            for (let i = 0; i < removeItem.genres.length; i++) {
                if (removeItem.genres[i] == genre) { 
                    //the index that is = genre remove the string with right genre
                    removeItem.genres.splice(i, 1);
                    return removeItem; 

                }
            }

        },


        //function that adds genre to selected movie

        addGenre: (title, genre) => {
            let addItem = [];

            //find right title 
            for (let i = 0; i < movielist.length; i++) {
                //if property titel = title parameter
                if (movielist[i].title == title) {
                    addItem = movielist[i];
                }
            }
            for (let i = 0; i < addItem.genres.length; i++) {
                // push added genre in genre in movielist
                addItem.genres.push(genre);
                return addItem;

            }
        },


        //function that adds rating to selected movie

        addRating: (title, rating) => {

            let addRating = [];
         //find right title
            for (let i = 0; i < movielist.length; i++) {
                 //if property titel = title parameter
                if (movielist[i].title == title) {
                    addRating = movielist[i];
                }
            }
            for (let i = 0; i < addRating.ratings.length; i++) {
    // push added rating in rating in movielist
                addRating.ratings.push(rating);
                return addRating;

            }
        },


        init: () => {

            document.getElementById("btnMovies").addEventListener("click", EvelinaMovieDatabase.printOutMovies);

            document.getElementById("submitMovie").addEventListener("click", EvelinaMovieDatabase.createMovie);

            document.getElementById("sortgenre").addEventListener("change", EvelinaMovieDatabase.inputGenre);

            document.getElementById("sortyear").addEventListener("change", EvelinaMovieDatabase.inputYear);

            EvelinaMovieDatabase.printOutWorstMovie();

            EvelinaMovieDatabase.printOutBestMovie();

            EvelinaMovieDatabase.getAverageRating();

            //functions that are not printed in DOM 

            console.log(EvelinaMovieDatabase.removeGenre("Pulp Fiction", "Crime"));

            console.log(EvelinaMovieDatabase.addGenre("The Lobster", "Hej"));

            console.log(EvelinaMovieDatabase.addRating("The Lobster", 3));


        },

    };
})();

EvelinaMovieDatabase.init();
