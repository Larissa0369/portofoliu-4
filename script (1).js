// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie=document.getElementById("educatie")
var asteptari= document.getElementId("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an= document.getElementId("anNastere")

//Add event listener
button.addEventlistener("click",altaViata)
an.addEventListener("mouseover", displayAge)

const d= new Date()
var year = d.getFullAge () 


//Define function
function displayAge() {
an.innerHTML=year - an.innerHTML
}  

//Define function
function altaViata () {
nume.innerHTML= "inginer"
prenume.innerHTML = "Google"
educatie.innerHTML = "Experiente"
asteptari.innerHTML="<ul><li>Workshops</li>
<li>Intership</li></ul>"
     
img.src="images/lion.jpg"
img.style.opacity= "70%"
img.style.width= "500px"
img.style.height = "400px"
img.style.border = "2px solid black"


