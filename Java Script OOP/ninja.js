
class Ninja{
    constructor(name , health , speed=3 , strength=3  ){
        this.name=name;
        this.health=health;
        this.speed=speed;
        this.strength=strength;
    }
    sayName(){
        console.log(this.name);
    }
    saySats(){
        console.log(this.name, this.strength,this.speed,this.health);   
    }
    drinkSake(){
        console.log(this.health+10);    
    }

}
var x= new Ninja("mohammad",100);
x.sayName();
x.saySats();
x.drinkSake();
var z=new Ninja("hasan",200,20,30);
z.sayName();
z.saySats();
z.drinkSake();








// Create a Ninja class

//  add an attribute: name
//  add an attribute: health
//  add a attribute: speed - give a default value of 3
//  add a attribute: strength - give a default value of 3
//add a method: showStats() - This should show the Ninja's name, strength, speed, and health.
//  add a method: sayName() - This should log that Ninja's name to the console
//add a method: drinkSake() - This should add +10 Health to the Ninja