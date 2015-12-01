var glob = require('glob');
var time = 100;
var tests = {};

function speedTest(f, time) {
    var stop = new Date().getTime() + time, iterations = 0;

    while (new Date().getTime() < stop) {
        iterations++;
        f();
    }

    return iterations;
}



glob("tests/**/*.js", function (er, files) {
    var baseline = speedTest(function(){}, time); 
    files.forEach(function (f) {
        var test = require('./' + f);
        var its = speedTest(test, time);
        console.log("%s\t%d/ms", f, (its) * (1000 / time)/1000);
    });

});