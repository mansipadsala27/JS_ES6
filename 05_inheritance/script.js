
// --------------------single inheritance---------------

// class Animal{
//     eat(){
//         console.log("Animal is eating");
        
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("Dog is barking");
        
//     }
// }

// let a=new Dog
// a.eat()
// a.bark()

// ---------------------------multi level inheritance ----------------

// class Animal{
//     eat(){
//         console.log("Animal is eating");
        
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("dog is barking");
        
//     }
// }
// class Cutedog extends Dog{
//     cry(){
//         console.log("cute dog is crying");
        
//     }
// }

// let c = new Cutedog
// c.eat()
// c.bark()
// c.cry()

// --------------------------------------hirarchical inheritace --------

// class Animal{
//     eat(){
//         console.log("animal is eating");
        
//     }
// }
// class Cat extends Animal{
//     meow(){
//         console.log("from cat class");
        
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("from dog class");
        
//     }
// }

// let c=new Cat
// c.eat()
// c.meow()

// let d=new Dog
// d.eat()
// d.bark()

// ----------------Hybrid inheritance -----------------

// class Animal{
//     eat(){
//         console.log("Animal class");
        
//     }
// }
// class Dog extends Animal{
//     bark(){
//         console.log("dog is barking");
        
//     }
// }

// class Cutedog extends Dog {
//     cute(){
//         console.log("dog is cute");
        
//     }
// }

// class Puppy extends Dog {
//     cry(){
//         console.log("puppy is crying");
        
//     }
// }
// let d =new Cutedog
//  d.cute()
//  d.bark()
//  d.eat()

// ------------------------super keyword-------

class Animal{
    
    constructor(name)
    {
        this.name=name
    }

    display(){
        console.log("From Animal..");
        
    }

}

class Dog extends Animal{
    
    constructor(name,clr){
        super(name)
        this.clr=clr
    }

    display(){
        super.display()
        console.log("From dog ...");
        console.log(`This is ${this.name} and it's clr is ${this.clr}`);
        
    }
}


let d=new Dog("dogg","black")
d.display()



