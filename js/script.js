const displaydiv=document.querySelector("#root");

function getImage(obj){
    const image=document.createElement('img');
    image.src=obj.url;
    console.log(image);
    displaydiv.append(image);
}


//getting data
function getData(data){
for(let i=0;i<20;i++){
    getImage(data[i]);
}
}


//fetching data
fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then(result=>getData(result));