const readline = require('readline');
const input = require('./src/input');

const main = async function() {
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
    
    let {inputObj, permuteArr } = await input(read);
    
}
main();

