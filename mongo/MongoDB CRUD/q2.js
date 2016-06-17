// Q2. Convert the given SQL query in its equivalent Mongo query
//     a) select name, profession from people where name = "Iva%" and age = 25
//     b) select name, profession from people where name = "Iva%" and age = 25
//
//     OR
//
//     a) Write a mongo query to get the profession of all people whose name starts with Iva and age is 25.
//     b) Write a mongo query to get the profession of the first person whose name starts with Iva and age is 25.

db.people.find({name: /^Iva.*/, age: 25}, {_id:0, name: 1, profession: 1})
db.people.findOne({name: /^Iva.*/, age: 25}, {_id:0, name: 1, profession: 1})
