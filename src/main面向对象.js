function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function() {
    console.log('i can say ' + this.language);
}

// function Chinese(language, skin) {
//     this.language = language;
//     this.skin = skin;
// }

// 原型链继承
// Chinese.prototype = new Person()
// var p1 = new Chinese('汉语', 'yellow');
// console.log(p1);
// p1.say()

// 对象冒充 借调 经典继承
// function Chinese(name, age, language, skin) {
//     this.language = language;
//     this.skin = skin;
//     Person.call(this, name, age);
// }
// var p1 = new Chinese('a', 18, '汉语', 'yellow');
// console.log(p1);
// p1.say()


// 组合继承
// function Chinese(name, age, language, skin) {
//     this.language = language;
//     this.skin = skin;
//     Person.call(this, name, age);
// }
// Chinese.prototype = Person.prototype;
// var p1 = new Chinese('a', 18, '汉语', 'yellow')
// p1.say()
// console.log(p1);



/**原型改造 */
function Chinese(language, skin) {
    this.language = language;
    this.skin = skin;
}

function American(language, skin) {
    this.language = language;
    this.skin = skin;
}

function object(parent) {
    function F() {}
    F.prototype = parent.prototype;
    return new F();
}

function inherit(parent, child) {
    var f = object(parent);
    f.constructor = child;
    child.prototype = f;
}


inherit(Person, Chinese);
inherit(Person, American);

Chinese.prototype.say = function() {
    console.log('我说中国话')
}

var c1 = new Chinese('汉语', '黄');
var a1 = new American('english', '白')

c1.say()
a1.say()
