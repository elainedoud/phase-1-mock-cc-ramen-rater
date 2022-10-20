// write your code here
const makeRamen = document.querySelector("#ramen-menu")
const ramenPic = document.createElement("img")

fetch("http://localhost:3000/ramens")
.then (res => res.json())
.then (ramens => elem {
    ramens.forEach => { 
    ramenPic.innerHTML = elem.image
    makeRamen.append(ramenPic)
    console.log(makeRamen.append(ramenPic))
    })
)

addEventListener("click",(e)) {
    e.preventDefault()

}

const ramenPicture = e.target.image
