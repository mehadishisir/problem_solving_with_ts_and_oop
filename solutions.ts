// problem -1

const filterEvenNumbers= (numbers:number[]):number[]=>{
    return (numbers.filter(num=> num % 2 === 0))
}
filterEvenNumbers([1,2,3,4,5,6])
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// problem -2
const reverseString=(text:string):string=>{
    return text.split("").reverse().join("")
}
// console.log(reverseString("hello"))

// problem -3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber):"String" | "Number"=>{
    if (typeof input === "string") {
        return "String";
    }else{
        return "Number";
    }
}
console.log(checkType("hello"))
console.log(checkType(123))


// problem--4

const getProperty =<T> (obj:T,key:keyof T)=>{
    return obj[key]
}



// problem--5

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus =(bookObj:Book)=>{
    return {
        ...bookObj,
        isRead: true
    }
}



// problem--6

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}