
var imageData = ["https://wallpaper.dog/large/10942883.jpg",
"https://i.pinimg.com/originals/ab/16/fc/ab16fc8db0a7aebb39622e5d145bf98c.jpg",
"https://i.pinimg.com/originals/12/66/26/126626a68bff60aa43ea753e57cc936b.jpg",
"https://w.wallha.com/ws/8/xMH4tLGk.jpg",
"https://wallpaperaccess.com/full/1895586.jpg"]

localStorage.setItem("images", JSON.stringify(imageData));


var moviesData = [
    {poster:"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg", name:"The Shawshank Redemption", releaseyear:"1994", directedby:"Frank Darabont",rating:"9.3"},
    {poster:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"The Godfather", releaseyear:"1972", directedby:"Francis Ford Coppola", rating:"9.2"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg", name:"The Dark Knight", releaseyear:"2008", directedby:"Christopher Nolan", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"The Godfather: Part II", releaseyear:"1974", directedby:"Francis Ford Coppola", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg", name:"12 Angry Men", releaseyear:"1957", directedby:"Sidney Lumet", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", name:"Schindler's List", releaseyear:"1993", directedby:"Steven Spielberg", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"The Lord of the Rings: The Return of the King", releaseyear:"2003", directedby:"Peter Jackson", rating:"9.0"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", name:"Pulp Fiction", releaseyear:"1994", directedby:"Quentin Tarantino", rating:"8.9"},
    {poster:"https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_FMjpg_UX1000_.jpg", name:"The Lord of the Rings: The Fellowship of the Ring", releaseyear:"2001", directedby:"Peter Jackson", rating:"8.9"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNjJlYmNkZGItM2NhYy00MjlmLTk5NmQtNjg1NmM2ODU4OTMwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg", name:"The Good, the Bad and the Ugly", releaseyear:"1966", directedby:"Sergio Leone", rating:"8.8"},
    {poster:"https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", name:"Forrest Gump", releaseyear:"1994 ", directedby:"Robert Zemeckis", rating:"8.8"},
    {poster:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg", name:"Fight Club", releaseyear:"1999", directedby:"David Fincher", rating:"8.8"}];


    localStorage.setItem("movies", JSON.stringify(moviesData));