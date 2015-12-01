module.exports = function () {
    var data = { a: { b: { c: { d: [] } } } };
    
    try {
        return data.a.b.c.d;
    }
    catch(e) {}
}