const getAlias = require('./utils/getAlias');

/**
 * 
 * @param {function} read 
 * @param {String} quest 
 * @return Promise
 */
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
/**
 * 
 * @param {function} read 
 */
const input = async function(read) {
    
    console.log('dimensions of the board: Width X Height ')
    let width = await question(read, 'Please Enter Width of chess board = ');
    let height = await question(read, 'Please Enter Height of chess board = ');
    let numberOfKings = await question(read, 'Please Enter Numbers of king = ');
    let numberOfQueens = await question(read, 'Please Enter Numbers of Queens = ');
    let numberOfBishops = await question(read, 'Please Enter Numbers of Bishops = ');
    let numberOfKnights = await question(read, 'Please Enter Numbers of Knight = ');
    let numberOfRooks = await question(read, 'Please Enter Numbers of Rook = ');

    let inputObj = {
        width,
        height,
        numberOfKings,
        numberOfRooks,
        numberOfKnights,
        numberOfQueens,
        numberOfBishops
    }

    let numberofBoxes = 1;
    let numberOfPieces = 0;
    let pieces = [];

    Object.keys(inputObj).map((key, index) => {
        let keyValue = parseInt(inputObj[key]);

        if (index < 2) {
            numberofBoxes *= keyValue;
        } else {
            const alias = getAlias(key);
        
            for(let i=0; i < keyValue; i++) {
                pieces.push(alias);
            }

            numberOfPieces += keyValue;
        }
    });
    console.log('numberofBoxes ', numberofBoxes, 'numberOfPieces ', numberOfPieces);
    if (numberofBoxes < numberOfPieces) {
        console.log('/////////////////  ERROR  ////////////////////');
        console.log('Given Chess Board is too small ');
        console.log('//////////////////////////////////////////////');   
    }

    read.close();
    
    let result = perms(pieces);
    // remove duplicates
    result = result.filter((val, pos) => {
        return result.indexOf(val) !== pos;
    }).map((val) => {
        return val.split('');
    });
    
    return {
        inputObj,
        permuteArr: result
    }
}

/**
 *
 *
 * @param {array} data
 * @returns
 */
function perms(data) {
    if (!(data instanceof Array)) {
        throw new TypeError("input data must be an Array");
    }

    data = data.slice();  // make a copy
    var permutations = [],
        stack = [];

    function doPerm() {
        if (data.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < data.length; i++) {
            var x = data.splice(i, 1);
            stack.push(x);
            doPerm();
            stack.pop();
            data.splice(i, 0, x);
        }
    }

    doPerm();
    for (var i = 0; i < permutations.length; i++) {
        permutations[i] = permutations[i].join('');
    }
    
    return permutations;
}

module.exports = input;