const hexagons = [4, 6, 2, 9, 5];

const getArea = function(width, height) {
    return (width * height)**2;
}

const areas = hexagons.map(s => getArea(s, s));