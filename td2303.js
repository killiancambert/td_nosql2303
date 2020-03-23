----- TD 23/03 -----

db.createCollection('sports', {
  validator: {
    $jsonSchema: {
      required: ["name", "collective"],
      properties: {
        name: {
          bsonType: "string",
          description: "name of the sport"
        },
        time: {
          bsonType: "string",
          description: "time of a game or roughly"
        },
        collective: {
          bsonType: "boolean",
          description: "is it a collective sport or no"
        }
      }
    }
  }
})

// On créé notre jeu de données

db.sport.insertMany([
   { name: "foot", time: "90", collective: true },
   { name: "basket", time: "48", collective: true },
   { name: "tennis", time: "90", collective: false }
])


// On rajoute 'title' & 'requiredTeams'

db.sport.updateMany([
  {},
  { $set: { title: "good", requiredTeams: 2 }, 
    upsert: true
  }
])