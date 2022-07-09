// 1)

class Developer {
    constructor(options) {
        this.name = options.name
        this.programmingLanguage = options.programmingLanguage
    }

    message() {
        console.log(`${this.name} работает с ${this.programmingLanguage}`);
    }
}

const IvanDeveloper = new Developer({ name: "Ivan", programmingLanguage: "Java" })

console.log(IvanDeveloper);
console.log(IvanDeveloper.message());

class Student extends Developer {
    constructor(options) {
        super(options)

        this.groupNumber = options.groupNumber
    }
}

const student1 = new Student({ name: "Ira", programmingLanguage: "JS", groupNumber: 3 })

console.log(student1);
console.log(student1.message());


//2)

const str = new String("String");

String.prototype.addedMark = function() {
    return `${this}!`
};

console.log(str.addedMark());


// 3)

const num = new Number(4);

Number.prototype.divideNumberByTwo = function() {
    return this / 2;
}

console.log(num.divideNumberByTwo());