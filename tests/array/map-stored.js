var data=['qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop']
var f=function(v) { return v.toUpperCase() };
module.exports = function() {
    return data.map(f);
}