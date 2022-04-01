
// <!--Slideshow-->

var imageDt = JSON.parse(localStorage.getItem("images"));
console.log(imageDt);

let i=1
let slideshow = document.getElementById("slideshow")

let img = document.createElement("img");
img.src = imageDt[0];
slideshow.append(img)

setInterval(function(){
    if(i==imageDt.length){
        i=0
    }

    let image = imageDt[i]
    slideshow.innerHTML = null;

    let img = document.createElement("img")
    img.src = image

    slideshow.append(img)
    i++;
}, 3000);



// Movies 

var moviesDt = JSON.parse(localStorage.getItem("movies"))

displayData(moviesDt)


function displayData(moviesDt){
    document.querySelector("#movies").innerHTML=""
    moviesDt.map(function(elem){

    var img = document.createElement("img")
    img.src = elem.poster

    var divinfo = document.createElement("div")

    var h2tag = document.createElement("h2")
    h2tag.innerText = elem.name
    
    var ptag= document.createElement("p")
    ptag.innerText= "("+ elem.releaseyear + ")"

    divinfo.append(h2tag,ptag)

    var dir = document.createElement("h3")
    dir.innerText = "Directed by " + elem.directedby;

    // var divrate = document.createElement("div")
    var rating = document.createElement("h5")
    rating.innerText = elem.rating + "⭐"

    var div = document.createElement("div")
    div.append(img,divinfo,dir,rating)
    document.querySelector("#movies").append(div);


})
}

function sortItems(){

var sorting = document.getElementById("sorting").value;
if(sorting=="h2l"){
    moviesDt.sort(function(a,b){
        return b.rating - a.rating;
    })
    displayData(moviesDt);
}
else if(sorting=="l2h")
{
    moviesDt.sort(function(a,b){
        return a.rating-b.rating;
    })
    displayData(moviesDt);
}
}


