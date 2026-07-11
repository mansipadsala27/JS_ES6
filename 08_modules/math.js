export let a=10

export let obj={
    name :"mansi",
    surname:"padsala",
    age: 21,
    contry: "India"
}

export let sum=(a,b)=>{
    return a+b
}

export let sub=(a,b)=>{
    return a-b
}

export let multy=(a,b)=>{
    return a*b
}

export let div=(a,b)=>{
    return a/b
}

export class demo{
    display(){
        console.log(`Hello from class`);
        
    }
}
export class d extends demo{
    
}


