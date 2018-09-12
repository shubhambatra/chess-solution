const checklimit = require('./checklimit');

const bishop = function(conf, i, j, row, column, isCheckThreat) {
    if (isCheckThreat) {
        let status = true;
        
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset++, columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
            }
        }
    
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset++, columnset--) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
            }
        }
        for (let rowset=i,columnset=j;  rowset>=0 && columnset>=0; rowset--, columnset--) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
            }
        }
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset--, columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                status = conf[rowset][columnset].fill == true ? false : true;
                if (!status) return status;
            }
        }
        return status;
    } else {
        conf[i][j].fill = true;
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset++, columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                conf[rowset][columnset].threat = true;
            }
        }
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset++, columnset--) {
            if (checklimit(rowset, columnset, row, column)) {
                conf[rowset][columnset].threat = true;
            }
        }
        for (let rowset=i,columnset=j;  rowset>=0 && columnset>=0; rowset--, columnset--) {
            if (checklimit(rowset, columnset, row, column)) {
                conf[rowset][columnset].threat = true;
            }
        }
        for (let rowset=i,columnset=j;  rowset<row && columnset<column; rowset--, columnset++) {
            if (checklimit(rowset, columnset, row, column)) {
                conf[rowset][columnset].threat = true;
            }
        }
    }
}
module.exports = bishop;