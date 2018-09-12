const checklimit = function (i, j, row, column) {
    if (i < 0 || j < 0) {
        return false;
    } else if (i >= row || j >= column) {
        return false;
    }
    return true;
}

module.exports = checklimit;