const checklimit = require('./checklimit');

const king = function(conf, i, j, row, column, isCheckThreat) {
    if (isCheckThreat) {
        let status = true;
        checklimit(i+1, j, row, column) && (conf[i+1][j].fill === true ? status = false : status =  true);
        checklimit(i-1, j, row, column) && (conf[i-1][j].fill === true ? status = false : status =  true);
        checklimit(i, j+1, row, column) && (conf[i][j+1].fill === true ? status = false : status =  true);
        checklimit(i, j-1, row, column) && (conf[i][j-1].fill === true ? status = false : status =  true);
        checklimit(i+1, j+1, row, column) && (conf[i+1][j+1].fill === true ? status = false : status =  true);
        checklimit(i-1, j-1, row, column) && (conf[i-1][j-1].fill === true ? status = false : status =  true);
        return status;
    } else {
        conf[i][j].fill = true;
        checklimit(i+1, j, row, column) && (conf[i+1][j].threat = true);
        checklimit(i-1, j, row, column) && (conf[i-1][j].threat = true);
        checklimit(i, j+1, row, column) && (conf[i][j+1].threat = true);
        checklimit(i, j-1, row, column) && (conf[i][j-1].threat = true);
        checklimit(i+1, j+1, row, column) && (conf[i+1][j+1].threat = true);
        checklimit(i-1, j-1, row, column) && (conf[i-1][j-1].threat = true);
    }
}
module.exports = king;