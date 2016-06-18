// Q5. Write queries for the following scenarios on the employee database
//     a) Set the category of all employees whose salary is less than 5000 to "C"
//     b) Change the location of all females working in Czech Republic to Singapore
//     c) Increment the salary of all employees who are living in Sweden by 5000 and set their category to "A"
//     d) We are closing the Sri Lanka office. Remove the designations of all employees in Sri Lanka and set their
//        release date to today

db.employees.update({ salary: { $gt: 5000 } }, { $set: { category: "C" }})

db.employees.update({
    location: "Czech Republic",
    gender: "Female"
}, {
    $set: {
        location: "Singapore"
    }
})

db.employees.update({
    location: "Sweden",
}, {
    $set: {
        $inc: { salary: 5000 },
        category: "A"
    }
})

db.employees.update({
    location: "Sri Lanka"
}, {
    $unset: {
        designation: 1
    },

    $set: {
        release_date: new Date()
    }
})
