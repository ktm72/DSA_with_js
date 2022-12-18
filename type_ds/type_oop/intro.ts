//Changing already tested code is not the best
//Super class has its properties and methods
//Subclasses extends from super class
//Subclass can override methods, create new methods
//class-> knows = properties, does = methods

class Player {
  health: number;
  speed: number;

  greet(name: string) {
    console.log("Hello", name);
  }
}
const mario = new Player();
mario.health = 10;
mario.speed = 1;
mario.greet("anita");
