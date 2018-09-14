/**
 * 
 */
const readline = require('readline');
const input = require('./src/input');
const fillChessBoard = require('./src/fillChessBoard');
const v8 = require('v8');
/**
 * 
 */
const main = async function() {
    // Initiate read line interface
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    // get Input from User
    let {inputObj, permuteArr } = await input(read);
    // // you can use cluster or chld process or Promises here for more speed.
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fillChessBoard(inputObj, permuteArr.splice(0, permuteArr.length/2)));
        }, 0);
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(fillChessBoard(inputObj, permuteArr.splice(permuteArr.length/2, permuteArr.length)));
        }, 0);
    });
    Promise.all([promise1, promise2]).then(values => {
        let results = values[0].concat(values[1]);
        console.timeEnd('calculating time');
        console.time('printing time');
        ((results) => {
            read.question('Print the board on console (y/n) ',  (answer) => {
                if (answer.toLowerCase() === 'y') {
                    results.map((result) => {
                        for(let i = 0; i<inputObj.width; i++) {
                            let str = '';
                            for(let j=0; j<inputObj.height; j++) {
                                
                                if (result[i][j].fill === true) {
                                    str += ' \x1b[32m'+result[i][j].alias+'  ';
                                } else if (result[i][j].threat === true) {
                                    str += '\x1b[31m x  '
                                }else {
                                    str += ' \x1b[32m__ ';
                                }
                            }
                            console.log(str+'\n');
                        }
                        console.log('\n\n\n');
                    });
                    console.timeEnd('printing time');
                    read.close();
                } else {
                    console.log('ans ', answer);
                }
            });
        })(results)
    });
}
// console.log(v8.getHeapSpaceStatistics());
main();

