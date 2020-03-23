----- TD 23/03 -----

db.createCollection('sport', {
  $jsonSchema: {
    required: ["name", "collective"],
    properties: {
      name: {
        bsonType: "string",
        description: "name of the sport"
      },
      
    }
  }
})

// On créé notre jeu de données

db.sport.insertMany([
   { name: "foot", time: 90, collective: true },
   { name: "basket", time: 48, collective: true },
   { name: "tennis", time: 90, collective: false }
])


// On rajoute 'title' & 'requiredTeams'

db.sport.updateMany([
  {},
  { $set: { title: "good", requiredTeams: 2 }, 
    upsert: true
  }
])