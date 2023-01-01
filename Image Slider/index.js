const nextE1 = document.querySelector(".next");
let currentImg = 1;
const imgsE1 = document.querySelectorAll("img");
const imageContainerE1 = document.querySelector(".image-container");
let timeout;
nextE1.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updatedImg();
})


function updatedImg(){
    if(currentImg > imgsE1.length ){
        currentImg = 1;
    }
    else if(currentImg <1){
        currentImg = imgsE1.length;
    }
    imageContainerE1.style.transform = `translate(-${(currentImg-1)*500}px)`;
    timeout = setTimeout(()=>{
    currentImg++;
    updatedImg()
},3000);
}
const prevE1 = document.querySelector(".prev");
prevE1.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updatedImg();
});