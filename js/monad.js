/**
 * Created by dick on 25-4-16.
 */
function MONAD() {
    return function unit(val) {
        var mon = {};
        mon.bind=  function (fn) {
            return fn(val);
        }
        return mon;
    };
}


function hello(p) {
    return 'hallo ' +p;
}