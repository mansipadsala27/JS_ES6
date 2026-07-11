// class Demo{
//     constructor(n,a){
//         this.name=n
//         this.age=a
//     }

//     getname(){
//         console.log(`Hello ${this.name}`);
//         console.log(`Your age is : ${this.age}`);
                
//     }
//     setname(n){
//         this.name=n
//     }
// }

// let s1=new Demo("Mansi",21)
// s1.getname()

// s1.setname("mansi padsala")
// s1.getname()


// ---------------------------------------------------------------


// class Demo{
//     constructor(n,a){
//         this.name=n
//         this.age=a
//     }
//     getname(){
//         console.log(`Name : ${this.name}`);
//         console.log(`age : ${this.age}`);
        
//     }
// }

// let s1=new Demo("Mansi",21)
// s1.getname()

// let s2=new Demo("Hensi",16)
// s2.getname()

// let s3=new Demo("Rajvi",19)
// s3.getname()

// let s4=new Demo("dhvani",17)
// s4.getname()

// let students=[s1,s2,s3,s4]

// students.map((v)=>{
//     console.log(v);
    
// })

// let ans=students.filter((v)=>{
//     return v.age<18
// })

// ans.map((v)=>{
//     const{name,age}=v

//     console.log(name,age);

// })

// ---------------------------------------------------------------
class Students{
    constructor(e,p){
        this.email=e
        this.pass=p
    }
    logincheck(){
        if(this.email=="padsalamanu@gmail.com" && this.pass=="mansi123")
        {
            console.log("Valid user...!");
            
        }
        else{
            console.log("Sorry ! Invlaid user...!");
            
        }
    }
}

let em="padsalamanu@gmail.com"
let ps="mansi123"

let n=prompt("enter your gmail : ")
let p=prompt("enter your pass : ")

let s1=new Students(n,p)
s1.logincheck()

let s2=new Students("manupadsala@gmail.com","manu123")
s2.logincheck()









