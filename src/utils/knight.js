/**
 * 
 */
const checklimit = require('./checklimit');
/**
 * 
 * @param {Array} conf 
 * @param {Number} i  row cursor
 * @param {Number} j 
 * @param {Number} row 
 * @param {Number} column 
 * @param {Boolean} isCheckThreat 
 */
const knight = function(conf, i, j, row, column, isCheckThreat) {
    if (isCheckThreat) {
        let status = true;
        status && checklimit(i+2, j-1, row, column) && (status = conf[i+2][j-1].fill === true ? false : true);
        status && checklimit(i+2, j+1, row, column) && (status = conf[i+2][j+1].fill === true ? false : true);
        status && checklimit(i-2, j+1, row, column) && (status = conf[i-2][j+1].fill === true ? false : true);
        status && checklimit(i-2, j-1, row, column) && (status = conf[i-2][j-1].fill === true ? false : true);
        
        status && checklimit(i+1, j+2, row, column) && (status = conf[i+1][j+2].fill === true ? false : true);
        status && checklimit(i-1, j+2, row, column) && (status = conf[i-1][j+2].fill === true ? false : true);
        status && checklimit(i+1, j-2, row, column) && (status = conf[i+1][j-2].fill === true ? false : true);
        status && checklimit(i-1, j-2, row, column) && (status = conf[i-1][j-2].fill === true ? false : true);
        
        return status;
    } else {
        conf[i][j].fill = true;
        checklimit(i+2, j-1, row, column) && (conf[i+2][j-1].threat = true);
        checklimit(i+2, j+1, row, column) && (conf[i+2][j+1].threat = true);
        checklimit(i-2, j+1, row, column) && (conf[i-2][j+1].threat = true);
        checklimit(i-2, j-1, row, column) && (conf[i-2][j-1].threat = true);

        checklimit(i+1, j+2, row, column) && (conf[i+1][j+2].threat = true);
        checklimit(i-1, j+2, row, column) && (conf[i-1][j+2].threat = true);
        checklimit(i+1, j-2, row, column) && (conf[i+1][j-2].threat = true);
        checklimit(i-1, j-2, row, column) && (conf[i-1][j-2].threat = true);
    }
}
module.exports = knight;