class Player {
  name: string;
  health: number;
  isInvicible: boolean;
  crush: Player;
  greet() {
    console.log(`Hello my name is ${this.name}`); //this refers to its corresponding instance
  }
}
const mario = new Player();
mario.name = "mario";
mario.health = 10;
mario.isInvicible = true;

const peach = new Player();
peach.name = "Peach";
peach.health = 8;
peach.isInvicible = false;

//
mario.crush = peach;
console.log(mario.crush.name);
mario.greet();
peach.greet();
