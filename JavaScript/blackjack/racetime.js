let player1Time = 102
let player2Time = 107

//function getFastestRaceTime() {
//    if (player1Time < player2Time) {
//        return player1Time
//    } else if (player2Time < player1Time) {
//        return player2Time
//    } else {
//        return player1Time
//    }
//}
//
//let fastestRace = getFastestRaceTime()

//console.log(fastestRace);
let timeArray = [102, 107, 123, 145];
//console.log(timeArray.length);
let sum = 0;
function arrayTime(){
    let sum = 0
    for (let i = 0; i <  timeArray.length; i+=1)  {
        sum += timeArray[i]         
    } 
    console.log(sum);
    return sum;
}

arrayTime();

console.log(sum);

//function totalRaceTime () {
//    totrace =  player1Time + player2Time
//    return totrace
//}
//
//let TuttiBalutti = totalRaceTime()
//console.log(TuttiBalutti);
