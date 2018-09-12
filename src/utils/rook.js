/**
 * 
 */
const checklimit = require('./checklimit');

const rook = function(conf, i, j, row, column, isCheckThreat) {
    if (isCheckThreat) {
        let status = true;
        for (let rowset=0,columnset=j;  rowset<row && columnset<column; rowset++) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
            }
        }
        for (let rowset=i,columnset=0;  rowset<row && columnset<column; columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
                
            }
        }
        return status;
    } else {
        conf[i][j].fill = true;
        for (let rowset=0,columnset=j;  rowset<row && columnset<column; rowset++) {
            if (checklimit(rowset, columnset, row, column)) {
                conf[rowset][columnset].threat = true;
            }
        }
        for (let rowset=i,columnset=0;  rowset<row && columnset<column; columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                conf[rowset][columnset].threat = true;
            }
        }
    }
}
module.exports = rook;