/**
 * 
 */
const readline = require('readline');
const input = require('./src/input');
const fillChessBoard = require('./src/fillChessBoard');
/**
 * 
 */
const main = async function() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    // let {inputObj, permuteArr } = await input(read);
    // you can use cluster or chld process here for more speed.
    // console.log('input ', inputObj, permuteArr);
    let inputObj = { 
        width: '4',
        height: '4',
        numberOfKings: '3',
        numberOfRooks: '0',
        numberOfKnights: '0',
        numberOfQueens: '0',
        numberOfBishops: '1'
    }
    let permuteArr = [ [ 'R', 'Q', 'N' ], [ 'K', 'B', 'K' ], [ 'B', 'K', 'K' ] ];
    fillChessBoard(inputObj, permuteArr);

}
main();

