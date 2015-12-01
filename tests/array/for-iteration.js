var data=['qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop']
module.exports = function() {
    var i;
    for(i=0;i<data.length;i++) {
        data[i] = data[i].toUpperCase();
    }
    return data;
}