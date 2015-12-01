var data = { aa: { b: { c: { d: [] } } } };
module.exports = function () {

    try {
        return data.a.b.c.d;
    }
    catch (e) { }
}