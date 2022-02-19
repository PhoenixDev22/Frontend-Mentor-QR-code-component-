const back = document.getElementById("back");
const front = document.getElementById("front");
const cardCchildren = Array.from(document.querySelectorAll(".card > div"));

// flip the card function 
cardCchildren.forEach(div => {
    div.addEventListener("click", function(e){
        if(e.currentTarget.id =="front"){
        front.style.transform = "rotateY(180deg)";
        back.style.transform = "rotateY(0)"
        }else{
            back.style.transform = "rotateY(-180deg)";
            front.style.transform = "rotateY(0)"
        }
    })
})