const checklimit = require('./checklimit');

const king = function(conf, i, j, row, column, isCheckThreat) {
    //  @to do following conditions with for loop;
    // console.log('conf ', conf);
    if (isCheckThreat) {
        let status = true;
        status & checklimit(i+1, j, row, column) && (conf[i+1][j].fill === true ? status = false : status =  true);
        status & checklimit(i-1, j, row, column) && (conf[i-1][j].fill === true ? status = false : status =  true);
        status & checklimit(i, j+1, row, column) && (conf[i][j+1].fill === true ? status = false : status =  true);
        status & checklimit(i, j-1, row, column) && (conf[i][j-1].fill === true ? status = false : status =  true);
        status & checklimit(i+1, j+1, row, column) && (conf[i+1][j+1].fill === true ? status = false : status =  true);
        status & checklimit(i-1, j-1, row, column) && (conf[i-1][j-1].fill === true ? status = false : status =  true);
        status & checklimit(i-1, j+1, row, column) && (conf[i-1][j+1].fill === true ? status = false : status =  true);
        status & checklimit(i+1, j-1, row, column) && (conf[i+1][j-1].fill === true ? status = false : status =  true);
        return status;
    } else {
        checklimit(i, j, row, column) && (conf[i][j] && (conf[i][j].fill = true));
        checklimit(i+1, j, row, column) && (conf[i+1][j].threat = true);
        checklimit(i-1, j, row, column) && (conf[i-1][j].threat = true);
        checklimit(i, j+1, row, column) && (conf[i][j+1].threat = true);
        checklimit(i, j-1, row, column) && (conf[i][j-1].threat = true);
        checklimit(i+1, j+1, row, column) && (conf[i+1][j+1].threat = true);
        checklimit(i-1, j-1, row, column) && (conf[i-1][j-1].threat = true);
        checklimit(i-1, j+1, row, column) && (conf[i-1][j+1].threat = true);
        checklimit(i+1, j-1, row, column) && (conf[i+1][j-1].threat = true);
    }
}
module.exports = king;