//tracing
window.trace = function () {
    var caller = ((new Error).stack.split('\n')[2]).trim();
    var args = Array.prototype.slice.call(arguments);
    args.unshift(caller);
    console.log.apply(console, args);
}

window.r = window.red = function () {
    var caller = ((new Error).stack.split('\n')[2]).trim();
    caller = caller.split('/')
    caller = caller[caller.length - 1]
    var args = Array.prototype.slice.call(arguments);
    args.unshift('background: red; color: white;');
    args.unshift('%c' + caller);
    console.log.apply(console, args);
}

window.c = function () {
    console.count.call(console, ':=============================')
}

window.l = console.log.bind(console);

