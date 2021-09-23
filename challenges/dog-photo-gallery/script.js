
// let div = document.querySelector(".container")
let div= document.getElementsByClassName("container")[0];

fetch("https://dog.ceo/api/breeds/image/random")
.then((response)=>{
    return response.json();
})
.then((photo)=>{
   let photoDog = photo.message;
   getImage(photoDog)
})
.catch((error)=>{ console.log(error);

})


function getImage(image){
let img = document.createElement("img");
img.src = image;
console.log( img.src)
div.appendChild(img);

}

