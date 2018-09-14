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
    // create emplty chess board/ 2D array
    for(let i = 0; i<row; i++) {
        chessBoard[i] = [];
        for(let j=0; j<column; j++) {
            chessBoard[i].push({
                fill: false,
                threat: false,
                alias: ''
            })
        }
    }

    let result = [];
    // use permutaion array here
    for(let startrowIndex=0; startrowIndex<column; startrowIndex++ ){
        for(let startcolumnIndex=0; startcolumnIndex<column; startcolumnIndex++ ){
            permuteArr.map((permute) => {
                let conf = JSON.parse(JSON.stringify(chessBoard.slice(0))); // deep copying Object of nested array
                // permuteArr[0];
                
                let leftPermute = permute.slice();
                for(let p=0; p< permute.length; p++) {
                        
                        labelmark:
                        for(let i=startrowIndex; i<row; i++) {
                            for(let j=startcolumnIndex; j<column; j++) {
                                // check if value within threat or not. or previous threat on board;
                                // create threat mark according to piece
                                // check if new peice is not threating any other filled value.
                                let chessBoardBox = conf[i][j];
                                if (!chessBoardBox.fill && !chessBoardBox.threat) {
                                    
                                    let newThreat = checkNewThreat(conf, permute[p], i, j, row, column);
                                    if(newThreat) {
                                        chessBoardBox.alias = permute[p];
                                        chessBoardBox.fill = true;
                                        // fillCount++;
                                        fillThreatMark(conf, permute[p], i, j, row, column);
                                        delete leftPermute[p];
                                        break labelmark;
                                    }    
                                }
                            }
                        }
                    }
                    leftPermute = leftPermute.filter((l) => l);
                    // @todo remove duplicate code
                    for(let p=0; p< leftPermute.length; p++) {
                        labelmark:
                        for(let i=0; i<row; i++) {
                            for(let j=0; j<column; j++) {
                                // check if value within threat or not. or previous threat on board;
                                // create threat mark according to piece
                                // check if new peice is not threating any other filled value.
                                
                                let chessBoardBox = conf[i][j];
                                if (!chessBoardBox.fill && !chessBoardBox.threat) {
                                    // i=i+1;
                                    let newThreat = checkNewThreat(conf, leftPermute[p], i, j, row, column);
                                    // newThreat = true;
                                    if(newThreat) {
                                        chessBoardBox.alias = leftPermute[p];
                                        chessBoardBox.fill = true;
                                        // fillCount++;
                                        
                                            fillThreatMark(conf, leftPermute[p], i, j, row, column);    
                                        
                                        break labelmark;
                                    }    
                                }
                            
                            }
                        }
                    }
                    result.push(conf);
            });
        }
    }
    // console.timeEnd('calculating time');
    return result;
}


module.exports = fillChessBoard;