var data = { a: { b: { c: { d: [] } } } };
module.exports = function () {

    if (data)
        if (data.a)
            if (data.a.b)
                if (data.a.b.c)
                    return data.a.b.c.d;
}