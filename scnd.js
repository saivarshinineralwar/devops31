let modebtn=document.querySelector("#b");
let currmd="ligth";
modebtn.addEventListener("click",()=>{
if(currmd==="light"){
    currmd="dark";
    document.querySelector("body").style.backgroundColor="black";
}
else{
    currmd="light";
    document.querySelector("body").style.backgroundColor="white";
}
console.log(currmd);
});