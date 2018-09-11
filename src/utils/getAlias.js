const getAlias = function(key) {
    if(key === 'numberOfKings') {
        return 'K';
    } else if (key === 'numberOfQueens') {
        return 'Q';
    } else if (key === 'numberOfRooks') {
        return 'R';
    } else if (key === 'numberOfKnights') {
        return 'T';
    } else if (key === 'numberOfBishops') {
        return 'B';
    }   
}
module.exports = getAlias;