function cat(breed, color, age, gender){
    this.breed = breed;
    this.color = color;
    this.age = age;
    this.gender = gender;

    this.speak = function() {
        console.log('Meow...');
    }
    this.eat = function() {
        console.log('I love to eat tuna');
    }
}



let tintin = new cat("Ragdoll", "Calico", "1", "female");

tintin.speak();
tintin.eat();