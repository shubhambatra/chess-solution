/**
 * 
 */
const checklimit = require('./utils/checklimit');
const kingThreat = require('./utils/king');
const rookThreat = require('./utils/rook');
const knightThreat =require('./utils/knight');
const bishopThreat = require('./utils/bishop');
/**
 * 
 * @param {Array} conf 
 * @param {string} piece 
 * @param {Number} i  current row of piece
 * @param {Number} j  current column
 * @param {Number} row  total number of row
 * @param {Number} column  total number of column
 */
const fillThreatMark = function(conf, piece, i, j, row, column) {
    if (piece === 'K') {
        //
        kingThreat(conf, i, j, row, column, false);
    } else if (piece === 'B') {
        //
        bishopThreat(conf, i, j, row, column, false);
    } else if (piece === 'R') {
        //
        rookThreat(conf, i, j, row, column, false);
    } else if (piece === 'Q') {
        //
        kingThreat(conf, i, j, row, column, false);
        bishopThreat(conf, i, j, row, column, false);
        rookThreat(conf, i, j, row, column, false);
    } else if (piece === 'N') {
        // 
        knightThreat(conf, i, j, row, column, false);
    }
}

module.exports = fillThreatMark;