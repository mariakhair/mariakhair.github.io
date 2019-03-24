const board = document.getElementById('board')

let turn = 0
let winner = false
let count = 9

let winCombos = [
    [0,1,2], // 1st row
    [3,4,5], // 2nd row
    [6,7,8], // 3rd row
    [0,3,6], // 1st column
    [1,4,7], // 2nd column
    [2,5,8], // 3rd column
    [0,4,8], // Diagonal
    [2,4,6] // Diagonal
]

const resultMessage = document.getElementById('result')

function checkWin(player){
    winCombos.forEach(function(combo){
        let boardState = combo
            .map(function(position){ //return new Array
            return board.children[position].innerHTML
        })
        .join("");

        if(boardState === "XXX" || boardState === "OOO"){
            winner = true
           resultMessage.innerHTML = player + " has won!"
        }
    })
}

board.addEventListener('click', function(event){
    if (event.target.innerHTML == '' & winner == false){
        if (turn % 2 == 0){
            event.target.innerHTML = 'X'
            checkWin('X')
        } else {
            event.target.innerHTML = 'O'
            checkWin('O')
    
        
        }
        if (count == 0) {
            document.getElementById('result').innerHTML = "It's a Tie!"
        }
        count -- 
        turn++
    }
    
})

const restartGame = document.getElementById('resetGame')

restartGame.addEventListener('click', function() {
    window.location.reload()
})




