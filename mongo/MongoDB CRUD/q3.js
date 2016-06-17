// Q3. Write queries to find the following records
//     a) Name of all people whose age is between 25 and 40 and are teachers
//     b) Name of all teachers whose age is less than 25 or lawyers whose age is between 25 and 35
//     c) Name and age of all hackers who like singing
//     d) Name and profession of all people who are older than 40 and like singing & sleeping

db.people.find({ age: {$gte: 25, $lte: 40} }, {_id: false, name: true})
db.people.find({ $or: [
    { age: { $lt: 25 }, profession: "teacher" },
    { age: { $gte: 25, $lte: 35 }, profession: "lawyer"  }
  ]
  },
  {
      _id: false,
      name: true
  }
)

db.people.find({ profession: "teacher", hobbies: "singing" }, { _id: false, name: true, age: true })
db.people.find({ age: { $gt: 40}, hobbies: { $all: ["singing", "sleeping"] } } , { _id: false, name: true, profession: true })
