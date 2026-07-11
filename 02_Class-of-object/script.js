class Demo{
    sum(){
        let a=10,b=15
        console.log(`Answer is : ${a+b}`);
        
    }

    min(){
        let a=12,b=8
        console.log(`answer is : ${a-b}`);
        
    }
    array(){
        let arr=[1,2,3,4,5]
        return `Length of array is : ${arr.length}`
    }
}
let d=new Demo;
d.sum()
d.min()
console.log(d.array());
