var data = "1234567890";
var cond = true;
module.exports = function() {
    if (cond) return data;
    return "";
}