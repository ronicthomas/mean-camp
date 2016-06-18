// Q6. Write queries for the following scenarios on the employee database
//     a) Add "Hiring" to the skillset of all recruiters (Hint: Designation is "Recruiter")
//     b) Add English & Chinese to the languages attribute of all employees located in China
//     c) Remove skills from IBM from the skillset of employees
//     d) Delete all employee records with no designation
//     e) Set the salary of Harry Potter to 50000. Create Harry Potter's records if he doesn't exist
//        (Hint: Harry Potter lives in Hogwarts and knows Parseltongue and English)


db.employees.update({
    designation: "Recruiter",
}, {
    $push: {
        skills: "Hiring"
    },
    { multi: true }
})

db.employees.update({
    location: "China"
}, {
    $pushAll: {
        language: ["English", "Chinese"]
    },
    { multi: true }
})

db.employees.update({}, {
    $pull: {
        skills: { $regex: "IBM" }
    },
    { multi: true }
})

db.employees.remove({
    designation: { $exists: false } 
})

db.employees.update({
    name: "Harry Potter"
}, {
    $set: {
        salary: 50000,
        languages: ["Parseltongue", "English"],
        location: "Hogwarts"
    }
}, { upsert: true })
