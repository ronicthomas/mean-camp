// Q1. Insert 1000 records in the "demo" collection with the following structure
// { name: string, age: number, profession: string, hobbies: array }

var hobbies = ["playing", "coding", "eating", "sleeping", "singing"]
var profession = ["hacker", "software engineer", "artist", "lawyer", "teacher"]
var names = ["Carolann", "Bernadette", "Iva", "Dorotha", "Maisha", "Kylee", "Van", "Teisha", "Ozell", "April"]

var count = 0;

while(count++ < 1000) {
    var doc = {
    	name: names[getRandomIndex(10)] + " " + names[getRandomIndex(10)],
    	age: count % 50,
    	profession: profession[getRandomIndex(5)],
    	hobbies: [hobbies[getRandomIndex(5)], hobbies[getRandomIndex(5)], hobbies[getRandomIndex(5)]]
    }

    db.people.insert(doc);
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
}
