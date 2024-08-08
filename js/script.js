const displaydiv=document.querySelector("#root");


//displaying image on a page
function getImage(obj){
    const div=document.createElement('div');
    div.className="card-items";
    const span=document.createElement('span');
    span.innerText=obj.title;
    const img=document.createElement('img');
    img.src=obj.thumbnailUrl;

    div.append(img,span);
    displaydiv.append(div);
    
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