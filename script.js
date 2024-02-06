let box = document.querySelectorAll(".box")
let text = document.querySelectorAll(".text")

const arr = [
    `url("assests/1.jpg")`,
    `url("assests/2.jpg")`,
    `url("assests/3.jpg")`,
    `url("assests/4.jpg")`,
    `url("assests/5.jpg")`,
    `url("assests/6.jpg")`,
    `url("assests/7.jpg")`
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