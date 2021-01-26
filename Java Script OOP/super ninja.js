
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
    showSats(){
        console.log(this.name, this.strength,this.speed,this.health);   
    }
    drinkSake(){
        console.log(this.health+10);    
    }

}
class Sensi extends Ninja{
    constructor(name,wisdom =10){
        this.wisdom=wisdom;
        super(name,200,10,10);
    }
    speakWisdom(){
        super.drinkSake();
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showSats();