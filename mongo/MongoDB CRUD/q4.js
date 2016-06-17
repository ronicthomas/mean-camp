// Q4. Write queries for the following scenarios on the restaurant database
//     a) Name & address of all restaurants whose zipcode is "11225"
//     b) Name & cuisine of all restaurants where atleast one grade score is above 20
//     c) Count the number of restaurants in the borough "Brooklyn" and building number "469"
//     d) Get the first 5 restaurants with atleast one grade score over 20 in Brooklyn
//     e) Get the first 5 Chinese restaurants in Brooklyn with atleast one grade score over 20
//        posted in the first week of July 2014

db.restaurants.find( { "address.zipcode": "11225"}, { _id: false, name: true, address: true} )
db.restaurants.find( {
    "grades": {
        $elemMatch: {
            "score": { $gt: 20  }
        }
    }
}, { _id: false, name: true, address: true} )

db.restaurants.count( { borough: "Brooklyn", "address.building": "469" } )
db.restaurants.find( {
    "grades": {
        $elemMatch: {
            "score": { $gt: 20  }
        }
    },
    "borough": "Brooklyn"
}, {
    _id: false,
    name: true,
    address: true
}).limit(5)

db.restaurants.find( {
  "grades": {
      $elemMatch: {
          "score": { $gt: 20  },
          "date": { $gte: ISODate("2014-07-01T00:00:00Z"), $lte: ISODate("2014-07-07T00:00:00Z")}
      }
  },
  borough: "Brooklyn",
  cuisine: "Chinese"
}).limit(5)
