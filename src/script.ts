/*
Создайте базовый класс BaseCharacter, который будет иметь имя и методы для движения влево, вправо, вверх и вниз. 
Затем создайте два класса, которые будут наследоваться от BaseCharacter. 
Например, класс Knight может атаковать мечом, а класс Dragon может дышать огнем.
*/

class BaseCharacter {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  moveLeft() {
    console.log(`${this.name} движется влево.`);
  }

  moveRight() {
    console.log(`${this.name} движется вправо.`);
  }

  moveUp() {
    console.log(`${this.name} движется вверх.`);
  }

  moveDown() {
    console.log(`${this.name} движется вниз.`);
  }
}

class Knight extends BaseCharacter {
  constructor(name: string) {
    super(name);
  }

  attackWithSword() {
    console.log(`${this.name} атакует мечом.`);
  }
}

class Dragon extends BaseCharacter {
  constructor(name: string) {
    super(name);
  }

  attackWithFire() {
    console.log(`${this.name} атакует огнем.`);
  }
}

const knight = new Knight("Рыцарь");
knight.moveLeft();
knight.attackWithSword();

const dragon = new Dragon("Дракон");
dragon.moveUp();
dragon.attackWithFire();
