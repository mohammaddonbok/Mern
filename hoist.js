//1
console.log(example);
let example = "I'm the example!"; 
//output error

//2
console.log(hello);                                   
var hello = 'world';
//output undefined

//3
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//output: magnet

//4
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//output: super cool

//5
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//output: chicken
//half-chicken

//6
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//output : error mean is not a function.

//7
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//output :undefined
// rock
// r&b
//disco

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;//chic
    dojo.students = students;//65
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//output
//{name:Chicago,students:65,hiring=true}
//Uncaught TypeError: Assignment to constant variable
