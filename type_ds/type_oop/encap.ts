//obj internals shouldn't be exposed to the client
//encapsulate instance variables with private
//protect object internal by encapsulated them
//use setter and getter method, implement logic for respective instance variables
class Player {
  private health: number;
  private speed: number;

  setHealth(health: number) {
    if (health < 0) return;
    this.health = health;
  }
  get getHealth() {
    return this.health;
  }
  setSpeed(speed: number) {
    this.speed = speed;
  }
  get getSpeed() {
    return this.speed;
  }
}
const mario = new Player();
// can't be accessible
// mario.health = 10;
// mario.speed = 1;

mario.setHealth(10);
console.log(`mario has health ${mario.getHealth}/10`);
mario.setSpeed(1);
mario.getSpeed;
