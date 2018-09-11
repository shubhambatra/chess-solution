async function question(read, quest) {
    return new Promise((resolve, reject) => {
        read.question(quest, async (answer) => {
            if (parseInt(answer)+'' == 'NaN') {
                console.log('Please enter valid number');
                resolve(await question(read, quest));
            } else {
                resolve(answer)
            }
        });
    })
}
const input = async function(read) {
    let inputObj = {};
    
    console.log('dimensions of the board: Width X Height ')
    let width = await question(read, 'Please Enter Width of chess board = ');
    let height = await question(read, 'Please Enter Height of chess board = ');
    let numberOfKing = await question(read, 'Please Enter Numbers of king = ');
    let numberOfQueens = await question(read, 'Please Enter Numbers of Queens = ');
    let numberOfBishops = await question(read, 'Please Enter Numbers of Bishops = ');
    let numberOfKnight = await question(read, 'Please Enter Numbers of Knight = ');
    let numberOfRook = await question(read, 'Please Enter Numbers of Rook = ');

    inputObj = {
        width,
        height,
        numberOfKing,
        numberOfRook,
        numberOfKnight,
        numberOfQueens,
        numberOfBishops
    }

    let numberofBoxes = 0;
    let numberOfPieces = 0;
 
    Object.keys(inputObj).map((key, index) => {
        if (index < 2) {
            numberofBoxes *= inputObj[key];
        } else {
            numberOfPieces += inputObj[key];
        }
    });
 
    if (numberofBoxes < numberOfPieces) {
        console.log('/////////////////  ERROR  ////////////////////');
        console.log('Given Chess Board is too small ');
        console.log('//////////////////////////////////////////////');   
    }

    read.close();
    return inputObj;
}
module.exports = input;