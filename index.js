const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ] ;

function superbowlWin(inputRecord) {
    function testWin(gameInstance) {
        // console.log(gameInstance);
        return gameInstance.result === "W"
    }
    if (inputRecord.find(testWin) === undefined) {
        return undefined;
    }
    else return inputRecord.find(testWin).year;
}

console.log(superbowlWin(record));