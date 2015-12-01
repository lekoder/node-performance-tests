var data = { aa: { b: { c: { d: [] } } } };
module.exports = function () {

    return data && data.a && data.a.b && data.a.b.c && data.a.b.c.d;
}