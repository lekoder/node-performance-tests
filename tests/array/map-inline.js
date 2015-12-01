var data=['qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop','qwertyuiop']
module.exports = function() {
    return data.map(function(v) { return v.toUpperCase() });
}