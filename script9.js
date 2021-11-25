class Person{
    constructor(size, color, weight){
        this.size = size;
        this.color = color;
        this.weight = weight;
    }
    travel(distance){
        console.log(`${this.size} of a ${distance} car.`)
    }
}

class Student extends Person{
    constructor(model, size, color, weight){
        super(size, color, weight);
        this.model = model;
    }
    provideComfort(subject){
        console.log(`${this.firstName} has enrolled in ${subject}`)
    }
}

const student = new Student('14.7 feet', 'White', '1,324 kilograms');  