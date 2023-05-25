const wildlife = document.querySelector("#wildlife");
const wildlifebtn = document.getElementById("#wildlifebtn");
const nature = document.querySelector("#nature");
const naturebtn = document.getElementById("#naturebtn");
const art = document.querySelector("#art");
const artbtn = document.getElementById("#artbtn");
const photography = document.querySelector("#photography");
const photographybtn = document.getElementById("#photographybtn");

function functionForwildlifebtn() {
    const wildlife = document.querySelector("#wildlife");
    const wildlifebtn = document.getElementById("#wildlifebtn");
    const nature = document.querySelector("#nature");
    const naturebtn = document.getElementById("#naturebtn");
    const art = document.querySelector("#art");
    const artbtn = document.getElementById("#artbtn");
    const photography = document.querySelector("#photography");
    const photographybtn = document.getElementById("#photographybtn");
    
    if (wildlife.style.display==="none") {
      wildlife.style.display="flex";
      photography.style.display="none";
      nature.style.display="none";
      art.style.display="none";
     }else{
      wildlife.style.display="flex";
      nature.style.display="none";
      art.style.display="none";
      photography.style.display="none";
     }
 }

function functionFornaturebtn() {
    const nature = document.querySelector("#nature");
    const naturebtn = document.querySelector("#naturebtn");
    const wildlife = document.querySelector("#wildlife");
    const wildlifebtn = document.getElementById("#wildlifebtn");
    const art = document.querySelector("#art");
    const artbtn = document.getElementById("#artbtn");
    const photography = document.querySelector("#photography");
    const photographybtn = document.getElementById("#photographybtn");
    if (nature.style.display==="none") {
      nature.style.display="flex";
      photography.style.display="none";
      wildlife.style.display="none";
      art.style.display="none";
   }else{
      nature.style.display="flex";
      wildlife.style.display="none";
      art.style.display="none";
      photography.style.display="none";
   }
 }

 function functionForartbtn() {
   const nature = document.querySelector("#nature");
   const naturebtn = document.querySelector("#naturebtn");
   const wildlife = document.querySelector("#wildlife");
   const wildlifebtn = document.getElementById("#wildlifebtn");
   const art = document.querySelector("#art");
   const artbtn = document.getElementById("#artbtn");
   const photography = document.querySelector("#photography");
   const photographybtn = document.getElementById("#photographybtn");
   if (art.style.display==="none") {
      art.style.display="flex";
      photography.style.display="none";
      wildlife.style.display="none";
      nature.style.display="none";
   }else{
      art.style.display="flex";
      wildlife.style.display="none";
      nature.style.display="none";
      photography.style.display="none";
   }
}

function functionForphotographybtn() {
   const nature = document.querySelector("#nature");
   const naturebtn = document.querySelector("#naturebtn");
   const wildlife = document.querySelector("#wildlife");
   const wildlifebtn = document.getElementById("#wildlifebtn");
   const art = document.querySelector("#art");
   const artbtn = document.getElementById("#artbtn");
   const photography = document.querySelector("#photography");
   const photographybtn = document.getElementById("#photographybtn");
   if (photography.style.display==="none") {
      photography.style.display="flex";
      wildlife.style.display="none";
      nature.style.display="none";
      art.style.display="none";
   }else{
      photography.style.display="flex";
      wildlife.style.display="none";
      nature.style.display="none";
      art.style.display="none";
   }
}



