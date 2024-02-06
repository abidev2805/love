let box = document.querySelectorAll(".box")
let text = document.querySelectorAll(".text")

const arr = [
    `url("assests/IMG-20240131-WA0016.jpg")`,
    `url("assests/IMG_20240104_193635_182 (1).jpg")`,
    `url("assests/IMG-20240131-WA0021.jpg")`,
    `url("")`,
    `url("")`,
    `url("")`
]

let state = {
    box1:true,
    box2:true,
    box3:true,
    box4:true,
    box5:true,
    box6:true,
    box7:true,
    box8:true
}

for (let i = 0; i<box.length; i++){
    box[i].addEventListener("click",(e)=>{
        if (state[e.target.id]){
            text[i].style.display = "flex"
            box[i].style.backgroundImage = "none"
        }else{
            text[i].style.display = "none"
            box[i].style.backgroundImage = `${arr[i]}`
        }
    })
}