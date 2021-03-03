exports.min = function min(array) {
    if (array != undefined && array.length != 0) {
        return array.reduce((prev, next) => Math.min(prev, next));
    }
    return 0;

}

exports.max = function max(array) {
    if (array != undefined && array.length != 0) {
        return array.reduce((prev, next) => Math.max(prev, next));
    }
    return 0;
}

exports.avg = function avg(array) {
    if (array != undefined && array.length != 0) {
        return array.reduce((prev, next) => prev + next) / array.length;
    }
    return 0;
}