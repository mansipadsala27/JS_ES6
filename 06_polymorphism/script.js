// --------------------------------polymorphism with using extend --------

// class A{
//     display(){
//         console.log("This is from A class");
        
//     }
// }
// class B extends A{
//     display(){
//         console.log("this is from B class");
        
//     }
// }
// let obj=[new A,new B]

// obj.map((val)=>{
//     val.display()
// })


// ---------------------------------without using extend --------

class A{
    display(){
        console.log("This is from A class");
        
    }
}
class B extends A{
    display(){
        console.log("this is from B class");
        
    }
}
let obj=[new A,new B]

obj.map((val)=>{
    val.display()
})

// obj[0].display()



