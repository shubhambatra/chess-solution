/**
 * 
 */
const checklimit = require('./checklimit');
const kingThreat = require('./king');
const bishopThreat = require('./bishop');
const rookThreat = require('./rook');
const knightThreat = require('./knight');
/**
 * 
 * @param {Array} conf 
 * @param {string} piece 
 * @param {Number} i  current row of piece
 * @param {Number} j  current column
 * @param {Number} row  total number of row
 * @param {Number} column  total number of column
 */
const checkNewThreat = function(conf, piece, i, j, row, column) {
    let status = true;
    if (piece === 'K') { // King
        status = kingThreat(conf, i, j, row, column, true);
    } else if (piece === 'B') { // Bishop
        status = bishopThreat(conf, i, j, row, column, true);
    } else if (piece === 'R') { // Rook
        status = rookThreat(conf, i, j, row, column, true);
    } else if (piece === 'Q') { // Queen
        // 
        status = rookThreat(conf, i, j, row, column, true);
        status = status && kingThreat(conf, i, j, row, column, true);
        status = status && bishopThreat(conf, i, j, row, column, true);
    } else if (piece === 'N') { // Knight
        // 
        status = knightThreat(conf, i, j, row, column, true);
    }
    return status;
}

module.exports = checkNewThreat;