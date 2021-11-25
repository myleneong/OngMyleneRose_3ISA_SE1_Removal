const rectangle = [4, 6, 2, 9, 5];

const computerArea = function(length, height) {
    return (length * height);
}

const areas = rectangle.map(r => computerArea(r, r));