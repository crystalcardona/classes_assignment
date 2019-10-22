//1

class Person {
    constructor(firstName, middleName, lastName){
        this.firstName = firstName
        this.middleName = middleName
        this.lastName = lastName
    }
    fullName(){
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

let person1 = new Person("Miles", "Eli", "Johnson")
let person2 = new Person("Ashley", "Noname", "Boss")
console.log(person1.firstName)
console.log(person1.fullName())

//2

class Book {
    constructor(title, author, rating){
        this.title = title
        this.author = author
        this.rating = rating
    }
    isGood() {
        if(this.rating >= 7){
            return true
        }
    }
}

let book1 = new Book("Game of Thrones", "George R. Martin", 9.1)
let book2 = new Book("Great Gatsby", "F. Scott Fitzgerald", 8.5)

console.log(book1.isGood())

//3

class Dog {
    constructor(name, breed, mood, hungry){
        this.name = name
        this.breed = breed
        this.mood = mood
        this.hungry = hungry
    }
    playFetch(){
        this.hungry = true
        this.mood = "Playful"
        return "Ruff"
    }
    feed(){
        if(this.hungry){
            return "Woof"
        }else if(this.hungry === false)
            return "The dog doesn't look hungry"
    }
    toString(){
        return this.name + " " + this.breed + " " + this.mood + " " + this.hungry
    }
}

let dog = new Dog("Toto", "Tarian", "Chill", false)
// console.log(dog.playFetch())
console.log(dog.feed())
console.log(dog.toString())

//4

let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273.2,
}

class Celsius {
    constructor(celsius){
        this.celsius = celsius
    }
    getFahrenheitTemp(){
        return 1.8 * this.celsius + 32
    }
    getKelvinTemp(){
        return this.celsius + 273
    }
    isBelowFreezing(){
        if(this.celsius === freezingPoint["celsius"]){
        return true
        }
    }
}
let newYork = new Celsius(5)
console.log(newYork.getFahrenheitTemp())
console.log(newYork.isBelowFreezing())


