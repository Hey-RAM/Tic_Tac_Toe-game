let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");

let turnO = true; //playerX, PlayerO

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winPatterns){
        //console.log(pattern[0], pattern[1], pattern[2]);
        
        let p1Val = boxes[pattern[0]].innerText;
        let p2Val = boxes[pattern[1]].innerText;
        let p3Val = boxes[pattern[2]].innerText;

        if(p1Val != "" && p2Val != "" && p3Val != ""){
            if(p1Val === p2Val && p2Val === p3Val){
                console.log("Winner", p1Val);
            }
        }
        
    }
}