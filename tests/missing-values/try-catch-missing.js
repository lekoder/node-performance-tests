module.exports = function () {
    var data = { aa: { b: { c: { d: [] } } } };
    
    try {
        return data.a.b.c.d;
    }
    catch(e) {}
}