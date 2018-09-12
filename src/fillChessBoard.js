/**
 * 
 */
const checkNewThreat = require('./utils/checkNewThreat');
const fillThreatMark = require('./fillThreatMark');

/**
 * 
 * @param {*} inputObj 
 * @param {*} permuteArr 
 */
const fillChessBoard = (inputObj, permuteArr) => {
    const row = inputObj.height;
    const column = inputObj.width;
    const chessBoard = [];
    let counter = 0;
    // create emplty chess board/ 2D array
    for(let i = 0; i<row; i++) {
        chessBoard[i] = [];
        for(let j=0; j<column; j++) {
            counter++;
            chessBoard[i].push({
                fill: false,
                threat: false,
                alias: ''
            })
        }
    }
    // put permutaion array
    
    let conf = JSON.parse(JSON.stringify(chessBoard.slice(0))); // deep copying Object of nested array
    // permuteArr[0];
    
    let fillCount = 0;
    for(let p=0; p< permuteArr[0].length; p++) {
        labelmark:
        for(let i=0; i<row; i++) {
            for(let j=0; j<column; j++) {
                // check if putting value within threat or not. or previous threat on board;
                // create threat mark according to piece
                
                let chessBoardBox = conf[i][j];
                if (!chessBoardBox.fill && !chessBoardBox.threat) {
                    // check if new peice is not threating any other filled value.
                    let newThreat = checkNewThreat(conf, permuteArr[0][p], i, j, row, column);
                    // newThreat = true;
                    if(newThreat) {
                        chessBoardBox.alias = permuteArr[0][p];
                        chessBoardBox.fill = true;
                        fillCount++;
                        fillThreatMark(conf, permuteArr[0][p], i, j, row, column);
                        break labelmark;
                    }    
                }
            }
        }
    }
    
    for(let i = 0; i<row; i++) {
        for(let j=0; j<column; j++) {
            console.log(conf[i][j]);
        }
    }
    // Put into seprat file following code. Time should calculate before following code;
    if (fillCount !== permuteArr[0].length) {
        console.log('chess Board is small');
    }
    for(let i = 0; i<row; i++) {
        let str = '';
        for(let j=0; j<column; j++) {
            
            if (conf[i][j].fill === true) {
                str += ' '+conf[i][j].alias+'  ';
                // str += ' __ ';
            } else if (conf[i][j].threat === true) {
                str += ' x  '
            }else {
                str += ' __ ';
            }
        }
        console.log(str+'\n');
    }
}


module.exports = fillChessBoard;