const bars = document.getElementById("bars");
const nav = document.querySelector(".nav-menu");
bars.addEventListener("click", (event) => {
    event.preventDefault();
    nav.style.display = "block";
})
function Clickme(){
    nav.style.display="none"
}

