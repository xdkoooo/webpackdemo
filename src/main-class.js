class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('i can say')
    }
    static go() {
        console.log('i can go')
    }
}

class Chinese extends Person {
    constructor(name, age, language, skin) {
        super(name, age)
        this.language = language;
        this.skin = skin
    }
    say() {
        console.log(this.language)
    }
}
var p1 = new Chinese('a', 20, '汉语', '黄')
console.log(p1);
p1.say();
// p1.go();
Person.go();

Chinese.go();