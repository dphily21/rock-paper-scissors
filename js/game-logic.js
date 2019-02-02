let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

const validTypes =(m1t, m2t, m3t) =>{
    m1t = m1t.toLowerCase();
    m2t = m2t.toLowerCase();
    m3t = m3t.toLowerCase();
    if(m1t === 'rock' || m1t === 'paper' || m1t === 'scissors'){
        if(m2t === 'rock' || m2t === 'paper' || m2t === 'scissors'){
            if(m3t === 'rock' || m3t === 'paper' || m3t === 'scissors'){
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }else {
        return false;
    }
};

const validValues =(m1t, m2t, m3t) =>{
    if(isNaN(m1t) || isNaN(m2t) || isNaN(m3t)){
        return false;
    }
    if(m1t < 1 || m2t < 1  || m3t < 1 ){
        return false;
    }
    if(m1t > 99 || m2t > 99  || m3t > 99 ){
        return false;
    }
    let totalValue = m1t + m2t + m3t;
    if(totalValue <= 99){
        return true;
    }else{
        return false;
    }
};

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if(!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return;
    }
    if(validTypes(moveOneType, moveTwoType , moveThreeType) === false){
        return;
    }
    if(validValues(moveOneValue, moveTwoValue , moveThreeValue) === false){
        return;
    }
    if(player === 'Player One'){
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;

    }if(player === 'Player Two'){
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;

    } else{
        return;
    }

};

const getRoundWinner = (round) => {

};

const getGameWinner = (round) => {

};

const setComputerMoves = (round) => {

};