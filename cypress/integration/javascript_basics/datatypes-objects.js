
var name = 'Altay'
var age = 35;
var name_object = {firstName : "Ibrahim",lastName:"Altay"}
var truth =true
var sheets = ["HTML","CSS","JS"]
var a =null;


//object

var student = {
    firstName:'Ibrahim',
    lastName : 'Altay',
    age:28,
    height :186,

    fullName: function(){
        return this.firstName + " "+this.lastName

    }

}
 
const ageValue = student.age

console.log(ageValue)
console.log(student.fullName())