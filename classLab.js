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



