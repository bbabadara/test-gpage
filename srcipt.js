const lienA=document.getElementById("lienA");
const btn=document.getElementById("btn");
const div1=document.getElementById("div1");
lienA.addEventListener("click",function(){
    alert("Cliqué");
})  

btn.addEventListener("click",function(){
    div1.innerHTML+="Cliqué";
})