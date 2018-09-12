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
 * @param {*} conf 
 * @param {*} piece 
 * @param {*} i 
 * @param {*} j 
 * @param {*} row 
 * @param {*} column 
 */
const checkNewThreat = function(conf, piece, i, j, row, column) {
    let status = true;
    if (piece === 'K') {
        status = kingThreat(conf, i, j, row, column, true);
    } else if (piece === 'B') {
        status = bishopThreat(conf, i, j, row, column, true);
    } else if (piece === 'R') {
        status = rookThreat(conf, i, j, row, column, true);
    } else if (piece === 'Q') {
        // 
        status = rookThreat(conf, i, j, row, column, true);
        status = status && kingThreat(conf, i, j, row, column, true);
        status = status && bishopThreat(conf, i, j, row, column, true);
    } else if (piece === 'N') {
        // 
        status = knightThreat(conf, i, j, row, column, true);
    }
    return status;
}

module.exports = checkNewThreat;