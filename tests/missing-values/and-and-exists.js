module.exports = function () {
    var data = { a: { b: { c: { d: [] } } } };
    return data && data.a && data.a.b && data.a.b.c && data.a.b.c.d;
}