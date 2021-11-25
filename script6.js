class School{
    constructor(name, location, population){
        this.name = name;
        this.location = location;
        this.population = population;
    }
    displayInfo(){
        console.log(`${this.name} is in ${this.location} and has a population of ${this.population}`);
    }
}
School.prototype.numPrograms = function(courses){
    const numPrograms = courses.join(', ');   
    console.log(this.name==='UST'?`${this.name} offers ${courses}`: '');
}
School.prototype.estYear = 1611;