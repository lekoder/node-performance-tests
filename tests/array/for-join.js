var data=['qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop']
module.exports = function() {
    var i,o='';
    for(i=0;i<data.length;i++) {
        o += data[i].toUpperCase();
    }
    return o;
}